import {
  Component,
  OnInit,
  OnDestroy,
  AfterViewChecked,
  ElementRef,
  ViewChild,
  inject,
  NgZone,
  ChangeDetectorRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ChatService } from '../../services/chat.service';
import { ConversationMessage } from '../../models/chat.models';
import { MarkdownPipe } from '../../pipes/markdown.pipe';

interface DisplayMessage {
  role: 'user' | 'assistant';
  /** Raw text displayed during typewriter animation */
  content: string;
  /** True while the typewriter is still running */
  isTyping?: boolean;
  /** Once typing completes, markdown is rendered into HTML stored here */
  renderedContent?: string;
  showExamButton?: boolean;
  examId?: number;
}

const INITIAL_GREETING = `Hi! I'm your AI exam assistant 👋 Tell me what you'd like to practice — for example:
• 'I'm preparing for a .NET + Angular full-stack interview'
• 'Give me an Azure fundamentals quiz'
• 'I want to test my JavaScript knowledge'
What would you like to study today?`;

const MAX_MESSAGES = 20;

@Component({
  selector: 'app-exam-chat',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, MarkdownPipe],
  templateUrl: './exam-chat.component.html',
  styleUrl: './exam-chat.component.css',
})
export class ExamChatComponent implements OnInit, OnDestroy, AfterViewChecked {
  @ViewChild('messagesContainer') private messagesContainer!: ElementRef;

  messages: DisplayMessage[] = [];
  userInput = '';
  isLoading = false;
  history: ConversationMessage[] = [];
  examId: number | null = null;
  examCreated = false;
  sessionLimitReached = false;

  /** Assigned by the server on the first chat turn; sent back on every subsequent turn. */
  private sessionId: number | null = null;

  private chatService = inject(ChatService);
  private router     = inject(Router);
  private ngZone     = inject(NgZone);
  private cdr        = inject(ChangeDetectorRef);
  private shouldScrollToBottom = false;

  ngOnInit(): void {
    this.messages.push({
      role: 'assistant',
      content: INITIAL_GREETING,
      renderedContent: INITIAL_GREETING, // no markdown in greeting, safe to use as-is
    });
  }

  ngOnDestroy(): void {
    // Best-effort: tell the server to mark the session as ended.
    // Fire-and-forget — no need to wait for the response.
    if (this.sessionId !== null) {
      this.chatService.endSession(this.sessionId).subscribe();
    }
  }

  ngAfterViewChecked(): void {
    if (this.shouldScrollToBottom) {
      this.scrollToBottom();
      this.shouldScrollToBottom = false;
    }
  }

  private scrollToBottom(): void {
    try {
      this.messagesContainer.nativeElement.scrollTop =
        this.messagesContainer.nativeElement.scrollHeight;
    } catch (err) {}
  }

  onEnterKey(event: Event): void {
    const ke = event as KeyboardEvent;
    if (!ke.shiftKey) {
      event.preventDefault();
      this.sendMessage();
    }
  }

  sendMessage(): void {
    const trimmed = this.userInput.trim();
    if (!trimmed || this.isLoading || this.sessionLimitReached) {
      return;
    }

    const userMessageCount = this.messages.filter(
      (m) => m.role === 'user'
    ).length;
    if (userMessageCount >= MAX_MESSAGES) {
      this.sessionLimitReached = true;
      return;
    }

    this.messages.push({ role: 'user', content: trimmed });
    this.shouldScrollToBottom = true;

    const request = {
      message: trimmed,
      history: [...this.history],
      sessionId: this.sessionId,
    };

    this.userInput = '';
    this.isLoading = true;

    this.chatService.sendMessage(request).subscribe({
      next: (response) => {
        // NgZone.run() forces Angular change detection even when the Fetch-based
        // HttpClient callback fires outside Zone.js (common with withFetch()).
        this.ngZone.run(() => {
          this.isLoading = false;
          this.history = response.updatedHistory ?? [];

          // Persist the session ID returned by the server
          if (response.sessionId) {
            this.sessionId = response.sessionId;
          }

          if (response.examCreated && response.examId != null) {
            this.examId = response.examId;
            this.examCreated = true;
          }

          const assistantMessage: DisplayMessage = {
            role: 'assistant',
            content: '',
            isTyping: true,
            showExamButton: response.examCreated && response.examId != null,
            examId: response.examId ?? undefined,
          };

          this.messages.push(assistantMessage);
          this.shouldScrollToBottom = true;
          this.cdr.detectChanges(); // immediately hide the loading dots

          this.typewriterEffect(
            assistantMessage,
            response.message ?? '',
            (fullText) => {
              this.ngZone.run(() => {
                assistantMessage.isTyping = false;
                // Store the full raw text — the markdown pipe renders it in the template
                assistantMessage.renderedContent = fullText;
                this.shouldScrollToBottom = true;
                this.cdr.detectChanges();
              });
            }
          );
        });
      },
      error: (err) => {
        this.ngZone.run(() => {
          this.isLoading = false;
          console.error('Chat error:', err);
          this.messages.push({
            role: 'assistant',
            content: 'Sorry, something went wrong. Please try again.',
          });
          this.shouldScrollToBottom = true;
          this.cdr.detectChanges();
        });
      },
    });
  }

  /** Strip any XML-style tool-call tags Claude might hallucinate when MCP is unavailable. */
  private stripXmlTags(text: string): string {
    // Remove block-level tags with their content: <tag_name>...</tag_name>
    return text
      .replace(/<[a-zA-Z_][a-zA-Z0-9_]*>[\s\S]*?<\/[a-zA-Z_][a-zA-Z0-9_]*>/g, '')
      .replace(/<[a-zA-Z_][a-zA-Z0-9_]*\s*\/>/g, '') // self-closing tags
      .trim();
  }

  private typewriterEffect(
    message: DisplayMessage,
    fullText: string,
    onComplete: (fullText: string) => void
  ): void {
    // Sanitise before display
    const text = this.stripXmlTags(fullText);

    // Adaptive speed: longer messages print faster so the user isn't waiting forever.
    // ≤100 chars → 12ms, 101-300 → 8ms, 301+ → 4ms
    const delay = text.length <= 100 ? 12 : text.length <= 300 ? 8 : 4;

    let index = 0;
    // Run the interval inside the Angular zone so each character triggers
    // change detection (required when using HttpClient withFetch()).
    this.ngZone.run(() => {
      const interval = setInterval(() => {
        if (index < text.length) {
          message.content += text[index];
          index++;
          this.shouldScrollToBottom = true;
        } else {
          clearInterval(interval);
          onComplete(text);
        }
      }, delay);
    });
  }

  startExam(examId: number | undefined): void {
    if (examId != null) {
      this.router.navigate(['/exam'], { queryParams: { examId } });
    }
  }
}
