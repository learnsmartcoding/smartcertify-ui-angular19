import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { Course } from "../models/course";

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private baseUrl = `${environment.apiUrl}/Courses`;
  constructor(private http: HttpClient) {}

  getAllCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.baseUrl}`);
  }
}
