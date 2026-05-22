export interface ConversationMessage {
  role: 'user' | 'assistant';
  content: string;
}

export interface ChatRequest {
  message: string;
  history: ConversationMessage[];
  /** Null on the first message; populated from the response on subsequent turns. */
  sessionId?: number | null;
}

export interface ChatResponse {
  message: string;
  examId?: number;
  examCreated: boolean;
  updatedHistory: ConversationMessage[];
  /** Server-assigned session ID — persist and echo back on every subsequent request. */
  sessionId: number;
}
