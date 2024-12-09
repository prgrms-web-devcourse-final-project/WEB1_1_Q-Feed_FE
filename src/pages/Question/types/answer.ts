export interface CreateAnswerRequest {
  questionId: number;
  content: string;
  image?: File | null;
  visibility: boolean;
}

export interface CreateAnswerResponse {
  answerId: number;
  message: string;
}
