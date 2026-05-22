import { ChangeDetectorRef, Component, Input, NgZone, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ExamResponse, Question } from '../../../models/exam-models';
import { ExamService } from '../../../services/exam.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-exam-details',
  imports: [FormsModule, CommonModule, FormsModule],
  templateUrl: './exam-details.component.html',
  styleUrls: ['./exam-details.component.css']
})
export class ExamDetailsComponent implements OnInit, OnChanges {
  examDetails: ExamResponse | null = null;
  @Input() examId: number = 0;
  @Input() showIsCorrectChoice = false;
  score: number = 0;
  isPassed: boolean = false;
  private loadedExamId = 0;

  constructor(
    private examService: ExamService,
    private ngZone: NgZone,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadExamDetails();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['examId'] && !changes['examId'].firstChange) {
      this.loadExamDetails();
    }
  }

  loadExamDetails(): void {
    if (!this.examId || this.examId < 1 || this.loadedExamId === this.examId) {
      return;
    }

    this.loadedExamId = this.examId;
    this.examService.getExamDetails(this.examId).subscribe((data) => {
      this.ngZone.run(() => {
        this.examDetails = this.normalizeExamDetails(data);
        this.calculateScore();
        this.changeDetectorRef.detectChanges();
      });
    });
  }

  calculateScore(): void {
    if (this.examDetails && this.examDetails.questions.length > 0) {
      const correctAnswers = this.examDetails.questions.filter(q => q.isCorrect).length;
      this.score = Math.round((correctAnswers / this.examDetails.questions.length) * 100);
      this.isPassed = this.score >= 60;
    }
  }

  getStatusClass(status: string): string {
    switch ((status || '').toLowerCase()) {
      case 'completed':
        return 'badge bg-success';
      case 'in progress':
        return 'badge bg-warning text-dark';
      default:
        return 'badge bg-secondary';
    }
  }

  getDifficultyBadge(level: string): string {
    switch ((level || '').toLowerCase()) {
      case 'beginner':
        return 'badge bg-primary';
      case 'intermediate':
        return 'badge bg-info text-dark';
      case 'advance':
        return 'badge bg-danger';
      default:
        return 'badge bg-secondary';
    }
  }

  private normalizeExamDetails(response: any): ExamResponse {
    const questions = response?.questions ?? response?.Questions ?? [];
    const questionValues = Array.isArray(questions) ? questions : questions?.$values ?? [];

    return {
      examId: response?.examId ?? response?.ExamId ?? 0,
      title: response?.title ?? response?.Title ?? '',
      status: response?.status ?? response?.Status ?? '',
      startedOn: response?.startedOn ?? response?.StartedOn ?? '',
      finishedOn: response?.finishedOn ?? response?.FinishedOn ?? null,
      questions: questionValues.map((question: any): Question => ({
        status: question.status ?? question.Status ?? '',
        questionText: question.questionText ?? question.QuestionText ?? '',
        isCorrect: question.isCorrect ?? question.IsCorrect ?? null,
        difficultyLevel: question.difficultyLevel ?? question.DifficultyLevel ?? '',
      })),
    };
  }
}
