import { apiClient } from '@/api/fetch';
import { PostDetail } from '@/pages/AnswerDetail/type/postType';
import { AnswerData } from '@/pages/Main/type/answer';
import { RecommendProfile } from '@/pages/Main/type/profile';

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

  getFeedAnswers: (params: { answerCursor?: string; size?: number; category?: string }) =>
    apiClient.get<PostDetail[]>('/feed/answers', {
      params: {
        answerCursor: params.answerCursor || '',
        size: params.size || 10,
        category: params.category || '여행',
      },
    }),

  getUserRecommendation: (userId: string) =>
    apiClient.get<RecommendProfile[]>(`/recommendations/${userId}`),
} as const;
