export interface answerResponse {
  answerCommentId: number;
  message: string;
}

export interface answerRequest {
  answerId: number;
  parentCommentId?: number;
  content: string;
}
