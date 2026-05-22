import { ChangeDetectorRef, Component, NgZone } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { UserExam } from '../../../models/exam-models';
import { ExamService } from '../../../services/exam.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CurrentUserService } from '../../../services/current-user.service';

@Component({
  selector: 'app-sample-user-exams',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './sample-user-exams.component.html',
  styleUrl: './sample-user-exams.component.css'
})
export class SampleUserExamsComponent {
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

  resumeExam(examId: number): void {
    this.router.navigate(['/exam'], { state: { examId }, queryParams: { examId } });
  }
  
}
