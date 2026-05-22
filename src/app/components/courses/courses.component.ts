import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Course } from '../../models/course';
import { CoursesService } from '../../services/courses.service';
import { Router } from '@angular/router';
import { TechFilterComponent } from '../tech-filter/tech-filter.component';
import { CurrentUserService } from '../../services/current-user.service';

@Component({
  selector: 'app-courses',
  imports: [CommonModule, FormsModule, TechFilterComponent],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css',
})
export class CoursesComponent {
  courses: Course[] = [];
  onlyAvailableTest = false;
  userId: number = 0;
  technologySelected: string = 'Azure'; // Default selected technology
  techData = [
    { name: 'Angular', image: '../../../assets/technologies/angular.svg' },
    { name: 'React', image: '../../../assets/technologies/react.svg' },
    { name: 'Azure', image: '../../../assets/technologies/azure.svg' },
    {
      name: '.Net Core',
      image: '../../../assets/technologies/dotnet-core.svg',
    },
    {
      name: 'Javascript',
      image: '../../../assets/technologies/javascript.svg',
    },
    { name: 'Java', image: '../../../assets/technologies/java.svg' },
    { name: 'SQL', image: '../../../assets/technologies/sql.svg' },
    {
      name: 'React Native',
      image: '../../../assets/technologies/react-native.svg',
    },
    { name: 'AWS', image: '../../../assets/technologies/aws.svg' },
    { name: 'Docker', image: '../../../assets/technologies/docker.svg' },
    { name: 'AI', image: '../../../assets/technologies/AI.svg' },
  ]; // List of technologies with names and images
  filteredCourses: Course[] = [];
  searchText: string = '';
  @ViewChild('coursesSection') coursesSection!: ElementRef;
  
  constructor(
    private courseService: CoursesService,
    private router: Router,
    private currentUserService: CurrentUserService
  ) {}

  ngOnInit(): void {
    this.loadCourses();
    this.currentUserService.loadIfAuthenticated().subscribe((user) => {
      this.userId = user?.userId ?? 0;
    });
  }

  onTechSelected(tech: string): void {
    console.log(`${tech} selected`);
    this.technologySelected = tech;
    this.applyFilters();
  }

  applyFilters(): void {
    // Base filter: Filter by technology
    let filtered = this.courses.filter((course) =>
      course.title.toLowerCase().startsWith(this.technologySelected.toLowerCase())
    );
  
    // Filter by test availability
    if (this.onlyAvailableTest) {
      filtered = filtered.filter((course) => course.questionsAvailable);
    }
  
    // Filter by search text (title or description)
    if (this.searchText.trim()) {
      const search = this.searchText.toLowerCase();
      filtered = filtered.filter(
        (course) =>
          course.title.toLowerCase().includes(search) ||
          course.description.toLowerCase().includes(search)
      );
    }
  
    this.filteredCourses = filtered.sort((a, b) => {
      return (b.questionCount > 0 ? 1 : 0) - (a.questionCount > 0 ? 1 : 0);
    });

  
    // Scroll to course section after filtering
    setTimeout(() => {
      this.coursesSection?.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 0);
    
  }
  
  getCoursesForTech(tech: string): Course[] {
    return this.courses.filter((course) =>
      course.title.toLocaleLowerCase().startsWith(tech.toLocaleLowerCase())
    );
  }

  filterAvailableTests() {
    if (this.onlyAvailableTest) {
      this.filteredCourses = this.courses.filter(
        (course) =>
          course.questionsAvailable == this.onlyAvailableTest &&
          course.title
            .toLocaleLowerCase()
            .startsWith(this.technologySelected.toLocaleLowerCase())
      );
    }
  }

  loadCourses(): void {
    this.courseService.getAllCourses().subscribe((courses) => {
      this.courses = courses;
      this.applyFilters(); // Initialize filtered courses
    });
  }

  startTest(courseId: number): void {
    console.log(`Start test for course ID: ${courseId}`);
  const questionCount = this.courses.find(f=>f.courseId == courseId)?.questionCount || 0;
    // Store data in session storage or local storage
    sessionStorage.setItem('userId', this.userId.toString());
    sessionStorage.setItem('courseId', courseId.toString());
    sessionStorage.setItem('questionCount', questionCount.toString());

    // Navigate to the start-a-test route
    this.router.navigate(['/exam/start']);
  }
}
