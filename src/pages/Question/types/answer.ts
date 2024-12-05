export interface CreateAnswerRequest {
  questionId: number;
  content: string;
  image?: string;
  visibility: boolean;
}

export interface CreateAnswerResponse {
  answerId: number;
  message: string;
}
