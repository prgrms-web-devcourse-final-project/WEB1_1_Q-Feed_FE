export interface Answer {
  answerId: number;
  createdAt: string;
  answerContent: string;
  questionContent: string;
  visibility: boolean;
}

export interface FetchAnswersResponse {
  answers: Answer[];
}

export interface UpdateAnswerVisibilityRequest {
  visibility: boolean;
}

export interface FetchAnswersCountResponse {
  answerCount: number;
}