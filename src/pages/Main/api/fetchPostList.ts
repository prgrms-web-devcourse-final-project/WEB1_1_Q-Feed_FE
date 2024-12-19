import { apiClient } from '@/api/fetch';
import { PostDetail } from '@/pages/AnswerDetail/type/postType';
import { AnswerData } from '@/pages/Main/type/answer';

export const feedAPI = {
  getAnswers: (params: { answerCursor?: string; size: number; category: string }) =>
    apiClient.get<PostDetail[]>('/feed/answers', {
      params: {
        answerCursor: params.answerCursor || '',
        size: params.size,
        category: params.category,
      },
    }),

  getMyAnswer: (questionId: number) =>
    apiClient.get<AnswerData>(`/feed/answers/users/question/${questionId}`),
} as const;
