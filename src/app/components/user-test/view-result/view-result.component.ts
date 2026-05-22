import { ChangeDetectorRef, Component, NgZone } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExamDetailsComponent } from "../exam-details/exam-details.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-result',
  imports: [ExamDetailsComponent, CommonModule],
  templateUrl: './view-result.component.html',
  styleUrl: './view-result.component.css'
})
export class ViewResultComponent {
  examId: number = 0;
  showCertificate = false;

  constructor(
    private route: ActivatedRoute,
    private ngZone: NgZone,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    // Get examId from query parameters
    this.route.queryParams.subscribe((params) => {
      this.ngZone.run(() => {
        this.examId = Number(params['examId']) || 0;
        this.changeDetectorRef.detectChanges();
      });
    });
  }

}
