import { apiClient } from '@/api/fetch';
import { PostDetail } from '@/pages/AnswerDetail/type/postType';
import { AnswerData } from '@/pages/Main/type/answer';
import { CommentsResponse } from '@/pages/Main/type/comment';
import { RecommendProfile } from '@/pages/Main/type/profile';
import { currentTime } from '@/pages/Main/util/getCurrentTime';
import { APIResponse } from '@/types/response';

export const feedAPI = {
  getMyAnswer: (questionId: number) =>
    apiClient.get<AnswerData>(`/feed/answers/users/question/${questionId}`),

  getFeedAnswers: (params: { answerCursor?: string; size?: number; category?: string }) =>
    apiClient.get<PostDetail[]>('/feed/answers', {
      params: {
        answerCursor: params.answerCursor || currentTime,
        size: params.size || 10,
        category: params.category || '여행',
      },
    }),

  getUserRecommendation: (userId: string) =>
    apiClient.get<RecommendProfile[]>(`/recommendations/${userId}`),

  getInfinitePosts: (params: { categoryId: number; cursor: string; size: number }) =>
    apiClient.get<APIResponse<CommentsResponse>>(
      `/feed/answers?category-id=${params.categoryId}&answerCursor=${params.cursor}&size=${params.size}`
    ),
} as const;
