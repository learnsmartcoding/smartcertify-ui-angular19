import { ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionDto } from '../../../models/question';
import { QuestionService } from '../../../services/question.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Course } from '../../../models/course';
import { CoursesService } from '../../../services/courses.service';

@Component({
  selector: 'app-questions-list',
  imports: [FormsModule, CommonModule],
  templateUrl: './questions-list.component.html',
  styleUrl: './questions-list.component.css',
})
export class QuestionsListComponent implements OnInit {
  questions: QuestionDto[] = [];
  courses: Course[] = [];
  selectedCourseId: number | '' = '';
  selectedDifficulty: string = '';
  filteredQuestions: QuestionDto[] = [];

  constructor(
    private questionService: QuestionService,
    private router: Router,
    private courseService: CoursesService,
    private ngZone: NgZone,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadCourses();
    this.loadQuestions();
  }

  loadCourses(): void {
    this.courseService.getAllCourses().subscribe((courses) => {
      this.ngZone.run(() => {
      this.courses = courses;
      this.changeDetectorRef.detectChanges();
      });
    });
  }

  loadQuestions(): void {
    this.questionService.getQuestions().subscribe({
      next: (data) => {
        this.ngZone.run(() => {
        this.questions = data;
        this.filterQuestions();
        this.changeDetectorRef.detectChanges();
        });
      },
      error: (err) => console.error('Error loading questions', err),
    });
  }

  filterQuestions(): void {
    this.filteredQuestions = this.questions.filter((q) => {
      const courseMatch =
        !this.selectedCourseId || q.courseId === Number(this.selectedCourseId);
      const difficultyMatch =
        !this.selectedDifficulty ||
        q.difficultyLevel.toLowerCase() ===
          this.selectedDifficulty.toLowerCase();
      return courseMatch && difficultyMatch;
    });
  }

  createQuestion(): void {
    this.router.navigate(['/admin/question/create']);
  }

  editQuestion(questionId: number): void {
    this.router.navigate(['/admin/question/edit', questionId]);
  }

  deleteQuestion(questionId: number): void {
    if (confirm('Are you sure you want to delete this question?')) {
      this.questionService.deleteQuestion(questionId).subscribe({
        next: () => this.loadQuestions(),
        error: (err) => console.error('Error deleting question', err),
      });
    }
  }

  getDifficultyClass(level: string): string {
    switch (level.toLowerCase()) {
      case 'beginner':
        return 'badge bg-success';
      case 'intermediate':
        return 'badge bg-warning';
      case 'advance':
        return 'badge bg-danger';
      default:
        return 'badge bg-secondary';
    }
  }
}
