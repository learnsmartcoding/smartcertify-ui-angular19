import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ChatRequest, ChatResponse } from '../models/chat.models';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private http = inject(HttpClient);
  private baseUrl = `${environment.apiUrl}`;

  sendMessage(request: ChatRequest): Observable<ChatResponse> {
    return this.http.post<ChatResponse>(
      `${this.baseUrl}/Chat/exam-assistant`,
      request
    );
  }

  /** Call on component destroy to mark the session as ended in the DB. */
  endSession(sessionId: number): Observable<void> {
    return this.http.post<void>(
      `${this.baseUrl}/Chat/end-session/${sessionId}`,
      {}
    );
  }
}
