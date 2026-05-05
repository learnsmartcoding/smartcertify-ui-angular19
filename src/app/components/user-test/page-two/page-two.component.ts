import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../../../models/course';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-page-two',
  imports: [CommonModule, FormsModule],
  templateUrl: './page-two.component.html',
  styleUrl: './page-two.component.css',
})
export class PageTwoComponent {
  @Input() course: Course | undefined | null = null;
  @Output() pageOneAccepted = new EventEmitter<number>();
  questionOptions: number[] = [];
  selectedQuestions: number = 5;
  duration: number = 15; // default
  isPracticeMode: boolean = true;

  ngOnInit() {
    const maxCount = Number(sessionStorage.getItem('questionCount')) || 300;

    this.questionOptions = [];

    if (maxCount <= 5) {
      // If maxCount is 5 or less, just include that number
      this.questionOptions.push(maxCount);
    } else {
      // Start from 5 and go in steps of 5 up to maxCount
      for (let i = 5; i <= maxCount; i += 5) {
        this.questionOptions.push(i);
      }

      // If maxCount isn't a multiple of 5 and not already included, add it
      if (
        maxCount % 5 !== 0 &&
        this.questionOptions[this.questionOptions.length - 1] !== maxCount
      ) {
        this.questionOptions.push(maxCount);
      }
    }

    this.calculateDuration(); // Initialize duration
  }

  onQuestionChange() {
    this.calculateDuration();
  }

  calculateDuration() {
    this.duration = (this.selectedQuestions / 5) * 15;
  }

  goBack(): void {
    this.pageOneAccepted.emit(1);
    console.log('Navigating back to the previous page');
    // Add navigation logic
  }

  startExam(): void {
    sessionStorage.setItem(
      'selectedNoOfQuestions',
      this.selectedQuestions.toString()
    );

    sessionStorage.setItem('isPracticeMode', this.isPracticeMode.toString());

    //trigger next page to start the exam
    this.pageOneAccepted.emit(3);
    console.log('Starting the exam');
    // Add navigation to the exam page logic
  }
}
