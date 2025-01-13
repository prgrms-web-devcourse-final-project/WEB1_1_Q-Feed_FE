export interface AnswerData {
  answerId: number;
  answerContent: string;
  createdAt: string;
}

export interface Answer {
  answerId: number;
  authorUserId: string;
  authorNickname: string;
  content: string;
  createdAt: string;
  likeCount: number;
  isLike: boolean;
  isFollowing: boolean;
  commentCount: number;
}

export interface FeedResponse {
  answers: Answer[];
  nextCursor?: string;
}

export interface FeedParams {
  answerCursor?: string;
  size?: number;
  category?: number;
}

export interface AnswerResponse {
  answerCommentId: number;
  message: string;
}
