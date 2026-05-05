export interface QuestionDto {
    questionId: number;
    courseId: number;
    questionText: string;
    difficultyLevel: string;
    isCode: boolean;
    hasMultipleAnswers: boolean;
    choices: ChoiceDto[];
  }
  
  export interface ChoiceDto {
    choiceId: number;
    questionId: number;
    choiceText: string;
    isCode: boolean;
    isCorrect: boolean;
    answerDetails: string;
  }
  