import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tech-filter',
  imports: [CommonModule],
  templateUrl: './tech-filter.component.html',
  styleUrl: './tech-filter.component.css'
})
export class TechFilterComponent {
  @Input() techList: { name: string; image: string }[] = []; // Array of techs with name and image
  @Output() filterCourses = new EventEmitter<string>(); // Emit selected tech name

  selectTechnology(tech: string): void {
    this.filterCourses.emit(tech); // Emit selected tech to parent component
  }

  @ViewChild('techContainer', { static: true }) techContainer!: ElementRef;

  scrollInterval: any;
  isPaused = false;

  ngAfterViewInit(): void {
    this.startAutoScroll();
  }

  startAutoScroll() {
    this.scrollInterval = setInterval(() => {
      if (!this.isPaused) {
        const container = this.techContainer.nativeElement;
        container.scrollLeft += 1;

        // Loop back when end is reached
        if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
          container.scrollLeft = 0;
        }
      }
    }, 10); // Lower = faster scroll, try 20-40 ms
  }

  pauseScroll() {
    this.isPaused = true;
  }

  resumeScroll() {
    this.isPaused = false;
  }

  ngOnDestroy() {
    clearInterval(this.scrollInterval);
  }
}
