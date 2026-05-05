import { ChangeDetectorRef, Component, NgZone } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { UserExam } from '../../../models/exam-models';
import { ExamService } from '../../../services/exam.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CurrentUserService } from '../../../services/current-user.service';

@Component({
  selector: 'app-user-exams',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './user-exams.component.html',
  styleUrl: './user-exams.component.css'
})
export class UserExamsComponent {

  userExams: UserExam[] = [];
  userId: number = 0;

  constructor(private examService: ExamService, private router: Router,
    private currentUserService: CurrentUserService,
    private ngZone: NgZone,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.currentUserService.loadCurrentUser().subscribe((user) => {
      this.ngZone.run(() => {
      this.userId = user.userId;
      this.examService.getUserExams(user.userId).subscribe((data) => {
        this.ngZone.run(() => {
        this.userExams = data;
        this.changeDetectorRef.detectChanges();
        });
      });
      });
    });
  }

  get totalExams(): number {
    return this.userExams.length;
  }

  get completedCount(): number {
    return this.userExams.filter((exam) => this.isCompleted(exam)).length;
  }

  get inProgressCount(): number {
    return this.userExams.filter((exam) => !this.isCompleted(exam)).length;
  }

  get practiceCount(): number {
    return this.userExams.filter((exam) => exam.isPracticeMode).length;
  }

  isCompleted(exam: UserExam): boolean {
    return !!exam.finishedOn || exam.status?.toLowerCase() === 'completed';
  }

  getStatusClass(exam: UserExam): string {
    return this.isCompleted(exam) ? 'completed' : 'in-progress';
  }

  getStatusLabel(exam: UserExam): string {
    return this.isCompleted(exam) ? 'Completed' : exam.status || 'In Progress';
  }

  trackByExamId(index: number, exam: UserExam): number {
    return exam.examId;
  }

  resumeExam(examId: number): void {
    this.router.navigate(['/exam'], { state: { examId }, queryParams: { examId } });
  }
  takeToCompletedExam(examId: number): void {
    this.router.navigate(['/exam/view-result'], { state: { examId }, queryParams: { examId } });
  }
}
