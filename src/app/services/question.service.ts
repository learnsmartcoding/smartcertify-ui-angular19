import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { QuestionDto } from '../models/question';

@Injectable({ providedIn: 'root' })
export class QuestionService {
  
  private baseUrl = `${environment.apiUrl}/questions`;
  constructor(private http: HttpClient) {}

  saveQuestionChoice(question: QuestionDto): Observable<any> {
    return this.http.post(`${this.baseUrl}/CreateQuestionChoices`, question);
  }

  updateQuestionChoice(question: QuestionDto): Observable<any> {
    return this.http.put(`${this.baseUrl}/UpdateQuestionAndChoices/${question.questionId}`, question);
  }

  getQuestions(): Observable<QuestionDto[]> {
    return this.http.get<QuestionDto[]>(`${this.baseUrl}`);
  }

  deleteQuestion(questionId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${questionId}`);
  }

  getQuestionById(id: number) {
    return this.http.get<QuestionDto>(`${this.baseUrl}/${id}`);
  }
}
