import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormArray,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { CoursesService } from '../../../services/courses.service';
import { QuestionService } from '../../../services/question.service';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionDto } from '../../../models/question';
import { Course } from '../../../models/course';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-question-choice',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './create-question-choice.component.html',
  styleUrl: './create-question-choice.component.css',
})
export class CreateQuestionChoiceComponent implements OnInit {
  questionId!: number;
  questionForm!: FormGroup;
  isUpdateMode = false;
  difficultyOptions = ['Beginner', 'Intermediate', 'Advance'];
  courses: Course[] = [];
  selectedCourseId: number | null = null; // Initialize selectedCourseId
  constructor(
    private fb: FormBuilder,
    private courseService: CoursesService,
    private questionService: QuestionService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
    private ngZone: NgZone,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.questionId = Number(params.get('id')); // Read ID from route
      this.isUpdateMode = !!this.questionId; // Check if update mode
      console.log('Editing Question ID:', this.questionId);
      this.initForm();
      this.loadCourses();

      if (this.isUpdateMode) {
        this.loadQuestion(this.questionId);
      } else {
        this.addChoice(); // Ensure at least one choice exists
      }
    });
  }

  initForm(): void {
    this.questionForm = this.fb.group({
      courseId: [null, Validators.required],
      questionText: ['', [Validators.required, Validators.minLength(10)]],
      difficultyLevel: ['', Validators.required],
      isCode: [false],
      hasMultipleAnswers: [false],
      choices: this.fb.array([]),
    });

    this.questionForm.get('courseId')?.valueChanges.subscribe((courseId) => {
      if (courseId) {
        this.selectedCourseId = courseId;
        this.toastr.info('Course selected: ' + this.selectedCourseId);
      }
    });

    if(this.selectedCourseId == null || this.selectedCourseId >0){
      this.questionForm.get('courseId')?.setValue(this.selectedCourseId);
    };

    //add 4 choices by default
    for (let i = 0; i < 3; i++) {
      this.addChoice();
    }
  }

  get choices(): FormArray {
    return this.questionForm.get('choices') as FormArray;
  }

  loadCourses(): void {
    this.courseService.getAllCourses().subscribe((courses) => {
      this.ngZone.run(() => {
        this.courses = courses;
        this.changeDetectorRef.detectChanges();
      });
    });
  }

  addChoice(): void {
    this.choices.push(
      this.fb.group({
        choiceId: [0],
        questionId: [0],
        choiceText: ['', Validators.required],
        isCode: [false],
        isCorrect: [false],
        answerDetails: [''],
      })
    );
  }

  removeChoice(index: number): void {
    if (this.choices.length > 1) {
      this.choices.removeAt(index);
    }
  }

  loadQuestion(id: number): void {
    this.questionService.getQuestionById(id).subscribe((questionData) => {
      this.ngZone.run(() => {
        if (!questionData) {
          console.error('Invalid question data received.');
          return;
        }

        // Patch form values
        this.questionForm.patchValue({
          courseId: questionData.courseId,
          questionText: questionData.questionText,
          difficultyLevel: questionData.difficultyLevel,
          isCode: questionData.isCode,
          hasMultipleAnswers: questionData.hasMultipleAnswers,
        });

        // Reset and populate choices
        this.choices.clear();
        questionData.choices.forEach((choice) => {
          this.choices.push(
            this.fb.group({
              choiceId: [choice.choiceId],
              questionId: [choice.questionId],
              choiceText: [choice.choiceText, Validators.required],
              isCode: [choice.isCode],
              isCorrect: [choice.isCorrect],
              answerDetails: [choice.answerDetails],
            })
          );
        });
        this.changeDetectorRef.detectChanges();
      });
    });
  }

  onSubmit(): void {
    if (this.questionForm.invalid) {
      alert('Please fill in all required fields.');
      return;
    }

    const questionDto: QuestionDto = this.questionForm.value;
    console.log('Submitting question:', questionDto);

    if (this.isUpdateMode) {
      questionDto.questionId = this.questionId;
      this.questionService.updateQuestionChoice(questionDto).subscribe({
        next: (response) => {
          console.log('Question choice updated successfully', response);
          this.router.navigate(['/admin/question/list']);
        },
        error: (error) => {
          console.error('Error updating question choice', error);
        },
      });
    } else {
      this.questionService.saveQuestionChoice(questionDto).subscribe({
        next: (response) => {
          console.log('Question choice created successfully', response);
          if (this.selectedCourseId == null || this.selectedCourseId < 1) {
            this.router.navigate(['/admin/question/list']);
          } else{
            this.questionForm.reset(); // Reset the form after successful submission
            this.initForm();          }
        },
        error: (error) => {
          console.error('Error creating question choice', error);
        },
      });
    }
  }
}
