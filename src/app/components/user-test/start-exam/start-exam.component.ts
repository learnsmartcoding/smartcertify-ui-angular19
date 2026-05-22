// Removed invalid @import statement

import { CommonModule } from '@angular/common';
import {
  AfterViewChecked,
  ChangeDetectorRef,
  Component,
  Input,
  NgZone,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ExamService } from '../../../services/exam.service';
import {
  ExamMetaData,
  QuestionDetails,
  QuestionStatus,
  StartExamRequest,
  UpdateUserQuestionChoice,
  UserExamQuestions,
} from '../../../models/exam-models';
import { catchError, of } from 'rxjs';
import { Router } from '@angular/router';
import { VideoScrollComponent } from '../../video-scroll/video-scroll.component';
import { IndividualConfig, ToastrService } from 'ngx-toastr';
import { Course } from '../../../models/course';
import { CoursesService } from '../../../services/courses.service';
import hljs from 'highlight.js';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { CurrentUserService } from '../../../services/current-user.service';

@Component({
  selector: 'app-start-exam',
  imports: [FormsModule, CommonModule, VideoScrollComponent],
  templateUrl: './start-exam.component.html',
  styleUrls: ['./start-exam.component.css'],
})
export class StartExamComponent implements OnInit, OnChanges, AfterViewChecked {
  showWarning = false;
  @Input() courseId: number = 0;
  @Input() existingExamId: number = 0;
  userId: number = 0;
  examMetaData: ExamMetaData | null = null; //has only examid and highlevel meta data, no questionids
  @Input() selectedCourse: Course | undefined | null = null;
  showExplanation: boolean = false;
  questionStatuses: QuestionStatus[] = [];
  currentQuestionAnswerExplanation: string = '';
  disableChoices: boolean = false; // Disable choices when exam is finished
  userExamQuestions: UserExamQuestions[] = []; // we fill this based on questionid
  questionsViewedExplanations: number[] = []; // Track which questions have been viewed

  currentQuestionIndex: number = 0;
  selectedChoice: number | null = null;
  currentQuestionDetails: QuestionDetails | null = null;
  markForReview: boolean = false;
  isCodeChecked: boolean = false;

  selectedChoiceText: string = '';

  totalMinutes: number = 0;
  timeLeft: number = 0; // in seconds
  timerDisplay: string = '00:00';
  intervalId: ReturnType<typeof setInterval> | undefined = undefined;
  startTime!: number; // timestamp in ms
  endTime!: number; // timestamp in ms
  totalQuestions = 12; // Example: this should come from your logic
  timeUpInvoked: boolean = false; // Flag to check if time up function is already invoked
  private loadedExistingExamId: number = 0;

  constructor(
    private currentUserService: CurrentUserService,
    private examService: ExamService,
    private router: Router,
    private toastr: ToastrService,
    private courseService: CoursesService,
    private sanitizer: DomSanitizer,
    private ngZone: NgZone,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  sanitizeHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.updateSelectedChoiceText();
    if (
      this.existingExamId > 0 &&
      this.userId > 0 &&
      this.loadedExistingExamId !== this.existingExamId
    ) {
      this.getExamMetaData();
    }
  }

  ngOnInit(): void {
    this.currentUserService.loadCurrentUser().subscribe((user) => {
      this.userId = user.userId;

      if (this.existingExamId === 0) {
        this.startExam();
      } else {
        this.getExamMetaData();
      }
    });
  }

  getCourses() {
    this.courseService.getAllCourses().subscribe((courses) => {
      this.selectedCourse = courses.find(
        (course) => course.courseId === this.examMetaData?.courseId
      );
    });
  }

  isExamFinishedAndInPracticeMode() {
    const isFinished =
      this.examMetaData?.finishedOn && this.examMetaData.isPracticeMode;
    this.disableChoices = this.examMetaData?.finishedOn ? true : false;
    //this.disableChoices = !!this.examMetaData?.finishedOn;

    return isFinished;
  }

  getExamMetaData() {
    if (this.existingExamId > 0) {
      this.loadedExistingExamId = this.existingExamId;
    }

    this.examService
      .getExamMetaData(this.existingExamId)
      .pipe(
        catchError((error) => {
          console.error('Error retrieving exam metadata:', error);
          if (error.status === 404 || error.status === 403) {
            // Redirect to user-exams on specific errors
            this.router.navigate(['/user-exams']);
          }
          // Return an empty observable or alternative data to complete the stream
          return of(null);
        })
      )
      .subscribe((response) => {
        if (response) {
          console.log('Exam retrieved successfully!', response);
          this.examMetaData = response;

          this.getCourses();
          if (this.examMetaData.isPracticeMode) {
            this.loadExamQuestions();
          } else if (!this.examMetaData.finishedOn) {
            this.loadExamQuestions();
          } else {
            const config: Partial<IndividualConfig> = {
              closeButton: false,
              progressBar: true,
              positionClass: 'toast-top-full-width',
            };
            this.toastr.info(
              'Your Exam has completed already!.',
              'Exam Completed',
              config
            );
            this.router.navigate(['/user-exams']);
            //dont need to collect feedback of finished exam
            // this.router.navigate(['/exam/feedback'], {
            //   queryParams: { examId: this.examMetaData?.examId },
            // });
          }
        }
      });
  }

  get currentQuestion() {
    return this.userExamQuestions &&
      this.currentQuestionIndex >= 0 &&
      this.currentQuestionIndex < this.userExamQuestions.length
      ? this.userExamQuestions[this.currentQuestionIndex]
      : null;
  }

  startExam() {
    const selectedNoOfQuestions =
      sessionStorage.getItem('selectedNoOfQuestions') || '0';
    const isPracticeMode =
      sessionStorage.getItem('isPracticeMode') === 'true' ? true : false;

    const request: StartExamRequest = {
      userId: this.userId,
      courseId: this.courseId,
      noOfQuestions: Number(selectedNoOfQuestions),
      practiceMode: isPracticeMode,
    };

    //todo, handle errors and put user back to user-exams page or home page
    this.examService.startExam(request).subscribe((response) => {
      console.log('Exam started successfully!', response);
      this.examMetaData = response;
      this.loadExamQuestions();
    });
  }

  initializeQuestionStatuses() {
    this.questionStatuses = this.userExamQuestions.map((question) => ({
      questionId: question.questionId,
      status: question?.selectedChoiceId > 0 ? 'Answered' : 'Not Started',
    }));
  }

  startTimer(): void {
    // Cancel any existing timer before starting a new one
    clearInterval(this.intervalId);
    this.intervalId = undefined;

    if (this.timeLeft <= 0) {
      this.timeLeft = 0;
      this.updateDisplay();
      this.changeDetectorRef.detectChanges();
      return;
    }

    this.startTime = Date.now();
    this.endTime = this.startTime + this.timeLeft * 1000;

    // Render the initial time immediately — without this detectChanges call
    // the view stays on '00:00' until the first interval tick one second later
    this.updateDisplay();
    this.changeDetectorRef.detectChanges();

    // Capture endTime locally so the closure always uses the value from THIS
    // call even if startTimer is somehow invoked again before the interval fires
    const endTime = this.endTime;

    this.ngZone.runOutsideAngular(() => {
      this.intervalId = setInterval(() => {
        const now = Date.now();
        const remaining = Math.floor((endTime - now) / 1000);

        this.ngZone.run(() => {
          if (remaining >= 0) {
            this.timeLeft = remaining;
            this.updateDisplay();
            this.changeDetectorRef.detectChanges();
          } else {
            clearInterval(this.intervalId);
            this.intervalId = undefined;
            this.timeLeft = 0;
            this.updateDisplay();
            this.changeDetectorRef.detectChanges();
            this.onTimeUp();
          }
        });
      }, 1000);
    });
  }

  updateDisplay(): void {
    const minutes = Math.floor(this.timeLeft / 60);
    const seconds = this.timeLeft % 60;
    this.timerDisplay = `Exam ends in ${this.pad(minutes)}:${this.pad(
      seconds
    )}`;
  }

  pad(num: number): string {
    return num < 10 ? '0' + num : num.toString();
  }

  onTimeUp(): void {
    if (!this.timeUpInvoked) {
      this.timeUpInvoked = true; // Set the flag to true to prevent multiple invocations
      // Handle exam submission or alert here
      this.toastr.warning(
        'Time is up! Your exam will be submitted automatically.'
      );
      this.toastr.info('Exam completed. Submit for evaluation!');
      this.router.navigate(['/exam/feedback'], {
        queryParams: { examId: this.examMetaData?.examId },
      });
    }
  }

  ngOnDestroy(): void {
    if (this.intervalId !== undefined) {
      clearInterval(this.intervalId);
      this.intervalId = undefined;
    }
  }

  loadExamQuestions() {
    const examIdToLoad: number =
      this.existingExamId > 0
        ? this.existingExamId
        : this.examMetaData?.examId || 0;
    if (examIdToLoad < 1) return;

    this.examService
      .getUserExamQuestions(examIdToLoad)
      .subscribe((response) => {
        this.ngZone.run(() => {
        this.userExamQuestions = this.normalizeUserExamQuestions(response); // this holds the questions associated with that particular exam.
        
        this.totalQuestions = this.userExamQuestions.length;
        const minutes = Math.ceil((this.totalQuestions / 5) * 15);
        this.totalMinutes = minutes;
        this.timeLeft = minutes * 60; // convert to seconds
        this.startTimer(); // Start the timer

        console.log('Loaded user exam questions:', response);
        this.initializeQuestionStatuses();
        if (!this.userExamQuestions.length) {
          this.toastr.error('No questions were returned for this exam.');
          return;
        }

        this.loadQuestion(
          this.userExamQuestions[this.currentQuestionIndex].questionId
        ); //we pass questionid to get its choices and question details
        this.changeDetectorRef.detectChanges();
        });
      });
  }

  loadQuestion(questionId: number) {
    if (!questionId || !this.userExamQuestions) return;

    const question = this.userExamQuestions.find(
      (q) => q.questionId === questionId
    );

    this.examService.getQuestionAndChoice(questionId).subscribe((response) => {
      this.ngZone.run(() => {
      this.currentQuestionDetails = this.normalizeQuestionDetails(response);

      //we need to wirte logic later to update this based on user choice // TODO
      this.selectedChoice = null;
      this.markForReview = false;

      if (question) {
        // Load the stored state for the question
        this.selectedChoice = question.selectedChoiceId ?? null;
        this.markForReview = question.reviewLater ?? false;
      }

      const questionStatus = this.questionStatuses.find(
        (qs) =>
          qs.questionId ===
          this.userExamQuestions[this.currentQuestionIndex].questionId
      );

      this.disableChoices =
        this.questionsViewedExplanations.find((f) => f === questionId) !==
          undefined || this.examMetaData?.finishedOn !== null
          ? true
          : false; // Disable choices if exam is finished;

      //if (questionStatus) questionStatus.status = 'In Progress';
      this.changeDetectorRef.detectChanges();
      });
    });
  }

  goToPreviousQuestion() {
    this.showExplanation = false; // Hide explanation when moving to the next question
    // Save current user's choice before navigating
    this.saveCurrentQuestionState();

    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
      this.loadQuestion(
        this.userExamQuestions[this.currentQuestionIndex].questionId
      );
    }
  }

  saveCurrentQuestionState() {
    // Save the current state of the question to the `userExamQuestions` array
    if (this.userExamQuestions[this.currentQuestionIndex]) {
      this.userExamQuestions[this.currentQuestionIndex].selectedChoiceId =
        this.selectedChoice || 0;
      this.userExamQuestions[this.currentQuestionIndex].reviewLater =
        this.markForReview;
    }
  }

  submitAndNext() {
    this.showExplanation = false; // Hide explanation when moving to the next question
    if (!this.selectedChoice) {
      // If no choice is selected, just move to the next question without updating
      this.showWarning = false; // Hide warning
      this.moveToNextQuestion();
      return;
    }

    this.showWarning = false;

    this.updateQuestionChoice(false); // Update the choice and follow the normal flow
  }

  private moveToNextQuestion() {
    if (this.currentQuestionIndex < this.userExamQuestions.length - 1) {
      this.currentQuestionIndex++;
      this.loadQuestion(
        this.userExamQuestions[this.currentQuestionIndex].questionId
      );
    } else {
      console.log('Exam completed. Submit for evaluation!');
      if (this.isExamFinishedAndInPracticeMode()) {
        this.toastr.info('Redirecting to user exams page...');
        this.router.navigate(['/user-exams']);
      } else {
        this.toastr.info('Exam completed. Submit for evaluation!');
        this.router.navigate(['/exam/feedback'], {
          queryParams: { examId: this.examMetaData?.examId },
        });
      }
    }
  }

  checkReviewStatus(questionId: number): boolean {
    return (
      this.userExamQuestions.find((f) => f.questionId === questionId)
        ?.reviewLater ?? false
    );
  }

  splitQuestionText(questionText: string): { text: string; isCode: boolean }[] {
    const regex = /```([\s\S]*?)```/g;
    let result = [];
    let lastIndex = 0;

    questionText.replace(regex, (match, code, index) => {
      if (lastIndex < index) {
        result.push({
          text: questionText.substring(lastIndex, index),
          isCode: false,
        });
      }
      result.push({ text: code, isCode: true });
      lastIndex = index + match.length;
      return match;
    });

    if (lastIndex < questionText.length) {
      result.push({ text: questionText.substring(lastIndex), isCode: false });
    }

    return result;
  }

  isCodeQuestion(questionText: string | undefined): boolean {
    if (!questionText) return false;
    return questionText.includes('<code>') || questionText.includes('```');
  }

  ngAfterViewChecked(): void {
    setTimeout(() => {
      document.querySelectorAll('pre code').forEach((block) => {
        hljs.highlightElement(block as HTMLElement);
      });
    }, 0);
  }

  updateSelectedChoiceText() {
    const selected = this.currentQuestionDetails?.choices.find(
      (c: any) => c.choiceId === this.selectedChoice
    );
    this.selectedChoiceText = selected ? selected.choiceText : '';
  }

  updateQuestionChoice(showExplanation: boolean = false) {
    if (this.selectedChoice !== null && this.examMetaData) {
      const userChoice: UpdateUserQuestionChoice = {
        examId: this.examMetaData.examId,
        examQuestionId:
          this.userExamQuestions[this.currentQuestionIndex].examQuestionId,
        selectedChoiceId: this.selectedChoice,
        reviewLater: this.markForReview,
      };

      if (this.examMetaData?.finishedOn === null) {
        this.examService.updateUserChoice(userChoice).subscribe(() => {
          const questionStatus = this.questionStatuses.find(
            (qs) =>
              qs.questionId ===
              this.userExamQuestions[this.currentQuestionIndex].questionId
          );

          if (questionStatus) questionStatus.status = 'Answered';
          if (!showExplanation) {
            if (!this.isExamFinishedAndInPracticeMode()) {
              this.saveCurrentQuestionState();
            }
            this.moveToNextQuestion();
          }
        });
      } else {
        this.moveToNextQuestion();
      }
    }
  }

  getExplanationText(): void {
    this.currentQuestionAnswerExplanation = '';
    this.currentQuestionDetails?.choices.forEach((c) => {
      this.currentQuestionAnswerExplanation =
        this.currentQuestionAnswerExplanation + ' ' + (c.answerDetails || '');
    });

    if (this.currentQuestionAnswerExplanation.trim().length < 1) {
      this.currentQuestionAnswerExplanation = 'No explanation available.';
    }

    if (this.disableChoices) {
      setTimeout(() => {
        this.showExplanation = true;
      });
      return;
    }

    if (!this.selectedChoice) {
      this.showWarning = true;
      // Delay to let the checkbox actually change before resetting it
      setTimeout(() => {
        this.showExplanation = false;
      });

      this.toastr.warning('Please select an answer to see the explanation.');
      return;
    } else {
      this.showWarning = false;
    }

    if (this.selectedChoice) {
      this.questionsViewedExplanations.push(
        this.userExamQuestions[this.currentQuestionIndex].questionId
      );
      this.updateQuestionChoice(true); // Update the choice and show explanation      
      this.disableChoices = true;
    }
  }

  formatExplanation(text: string): string {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const replaced = text.replace(urlRegex, (url) => {
      return `<br><a href="${url}" target="_blank">${url}</a>`;
    });
    return replaced.replace(/\n/g, '<br>'); // Convert line breaks as well
  }

  getTimerBadgeClass(): string {
    const minutesLeft = this.timeLeft / 60;

    if (minutesLeft <= 2) {
      return 'bg-danger';
    } else if (minutesLeft <= 5) {
      return 'bg-warning text-dark'; // Yellow with dark text for visibility
    } else {
      return 'bg-success';
    }
  }

  getChoiceClass(choice: any): string {
    if (!this.disableChoices) {
      return '';
    }
  
    const isSelected = this.selectedChoice === choice.choiceId;
  
    if (choice.isCorrect && isSelected) {
      return 'choice-correct-selected';
    } else if (!choice.isCorrect && isSelected) {
      return 'choice-wrong-selected';
    } else if (choice.isCorrect) {
      return 'choice-correct';
    }
  
    return '';
  }

  private normalizeUserExamQuestions(response: any): UserExamQuestions[] {
    const questions = Array.isArray(response)
      ? response
      : response?.$values ?? response?.items ?? response?.data ?? [];

    return questions.map((question: any) => ({
      examId: question.examId ?? question.ExamId ?? 0,
      examQuestionId: question.examQuestionId ?? question.ExamQuestionId ?? 0,
      questionId: question.questionId ?? question.QuestionId ?? 0,
      selectedChoiceId: question.selectedChoiceId ?? question.SelectedChoiceId ?? 0,
      reviewLater: question.reviewLater ?? question.ReviewLater ?? false,
      isCorrect: question.isCorrect ?? question.IsCorrect ?? false,
    }));
  }

  private normalizeQuestionDetails(response: any): QuestionDetails {
    const question = response?.question ?? response?.Question ?? response;
    const choices = question?.choices ?? question?.Choices ?? response?.choices ?? response?.Choices ?? [];
    const choiceValues = Array.isArray(choices) ? choices : choices?.$values ?? [];

    return {
      questionId: question?.questionId ?? question?.QuestionId ?? 0,
      courseId: question?.courseId ?? question?.CourseId ?? 0,
      questionText: question?.questionText ?? question?.QuestionText ?? '',
      difficultyLevel: question?.difficultyLevel ?? question?.DifficultyLevel ?? '',
      isCode: question?.isCode ?? question?.IsCode ?? false,
      hasMultipleAnswers: question?.hasMultipleAnswers ?? question?.HasMultipleAnswers ?? false,
      choices: choiceValues.map((choice: any) => ({
        choiceId: choice.choiceId ?? choice.ChoiceId ?? 0,
        questionId: choice.questionId ?? choice.QuestionId ?? 0,
        choiceText: choice.choiceText ?? choice.ChoiceText ?? '',
        isCode: choice.isCode ?? choice.IsCode ?? false,
        isCorrect: choice.isCorrect ?? choice.IsCorrect ?? false,
        answerDetails: choice.answerDetails ?? choice.AnswerDetails ?? '',
      })),
    };
  }
  
}
