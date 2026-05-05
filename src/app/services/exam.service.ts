import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../models/course';
import {
  Choice,
  ExamFeedback,
  ExamMetaData,
  ExamResponse,
  QuestionDetails,
  StartExamRequest,
  UpdateUserQuestionChoice,
  UserExam,
  UserExamQuestions,
} from '../models/exam-models';

@Injectable({
  providedIn: 'root',
})
export class ExamService {
  private baseUrl = `${environment.apiUrl}`;
  constructor(private http: HttpClient) {}

  getAllCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.baseUrl}`);
  }

  getExamMetaData(examId: number): Observable<ExamMetaData> {
    return this.http.get<ExamMetaData>(
      `${this.baseUrl}/exam/exam-meta-data/${examId}`
    );
  }

  startExam(request: StartExamRequest): Observable<ExamMetaData> {
    return this.http.post<ExamMetaData>(
      `${this.baseUrl}/exam/start-exam`,
      request
    );
  }

  getQuestionAndChoice(questionId: number): Observable<QuestionDetails> {
    return this.http.get<QuestionDetails>(
      `${this.baseUrl}/questions/${questionId}`
    );
  }

  updateUserChoice(userChoice: UpdateUserQuestionChoice): Observable<any> {
    return this.http.put(
      `${this.baseUrl}/exam/update-user-choice/${userChoice.examQuestionId}`,
      userChoice
    );
  }

  getUserExamQuestions(examId: number): Observable<UserExamQuestions[]> {
    return this.http.get<UserExamQuestions[]>(
      `${this.baseUrl}/exam/get-user-exam-questions/${examId}`
    );
  }

  getUserExams(userId: number): Observable<UserExam[]> {
    return this.http.get<UserExam[]>(
      `${this.baseUrl}/exam/get-user-exams/${userId}`
    );
  }

  submitFeedback(feedbackPayload: ExamFeedback): Observable<any> {
    return this.http.put(`${this.baseUrl}/exam/update-exam-status/${feedbackPayload.examId}`, feedbackPayload);
  }

  getExamDetails(examId: number): Observable<ExamResponse> {
    return this.http.get<ExamResponse>(`${this.baseUrl}/exam/exam-details/${examId}`);
  }
  
}
