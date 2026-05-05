export interface StartExamRequest {
  courseId: number;
  userId: number;
  practiceMode?: boolean;
  noOfQuestions?: number;
}

export interface ExamMetaData {
  examId: number;
  courseId: number;
  userId: number;
  status: string;
  startedOn: Date;
  finishedOn?: Date;
  isPracticeMode: boolean;
}

export interface QuestionDetails {
  questionId: number;
  courseId: number;
  questionText: string;
  difficultyLevel: string;
  isCode: boolean;
  hasMultipleAnswers: boolean;
  choices: Choice[];
}

export interface Choice {
  choiceId: number;
  questionId: number;
  choiceText: string;
  isCode: boolean;
  isCorrect: boolean;
  answerDetails: string;
}

export interface UserExamQuestions extends UpdateUserQuestionChoice {
  questionId: number;
  isCorrect: boolean;
}

export interface UpdateUserQuestionChoice {
  examId: number;
  examQuestionId: number;
  selectedChoiceId: number;
  reviewLater: boolean;
}

export interface QuestionStatus {
  questionId: number;
  status: string;
}

export interface UserExam {
  examId: number;
  courseId: number;
  title: string;
  description: string;
  status: string;
  startedOn: Date;
  finishedOn: Date;
  isPracticeMode: boolean;
}

export interface ExamFeedback {
  examId: number;
  feedback: string;
}


export interface ExamResponse {
  examId: number;
  title: string;
  status: string;
  startedOn: string; // Use `Date` if you plan to parse it as a JavaScript Date object
  finishedOn: string | null; // Nullable if the exam isn't finished yet
  questions: Question[];
}

export interface Question {
  // questionId?: number;
  // courseId?: number;
  // isCode?: boolean;
  // hasMultipleAnswers?: boolean;
  status: string;
  questionText: string;
  isCorrect: boolean | null; // Nullable to account for unanswered questions
  difficultyLevel: string;
}
