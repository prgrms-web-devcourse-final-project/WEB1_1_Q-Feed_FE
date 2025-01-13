import { apiClient } from '@/api/fetch';
import { PostDetail } from '@/pages/AnswerDetail/type/postType';
import { AnswerData } from '@/pages/Main/type/answer';
import { CommentsResponse } from '@/pages/Main/type/comment';
import { RecommendProfile } from '@/pages/Main/type/profile';
import { currentTime } from '@/pages/Main/util/getCurrentTime';
import { APIResponse } from '@/types/response';

export const feedAPI = {
  // 나의 답변 로드
  getMyAnswer: (questionId: number) =>
    apiClient.get<AnswerData>(`/feed/answers/users/question/${questionId}`),

  // 지금뜨는 인기 답변 목록
  getFeedAnswers: (params: { answerCursor?: string; size?: number; category?: string }) =>
    apiClient.get<PostDetail[]>('/feed/answers', {
      params: {
        answerCursor: params.answerCursor || currentTime,
        size: params.size || 10,
        category: params.category || '여행',
      },
    }),

  // 친구 추천 목록
  getUserRecommendation: (userId: string) =>
    apiClient.get<RecommendProfile[]>(`/recommendations/${userId}`),

  // 답변 목록 조회 (커서)
  getInfinitePosts: (params: { categoryId: number; cursor: string; size: number }) =>
    apiClient.get<APIResponse<CommentsResponse>>(
      `/feed/answers?category-id=${params.categoryId}&answerCursor=${params.cursor}&size=${params.size}`
    ),

  // 답변 수정
  updateAnswer: (answerId: string) => {
    apiClient.patch<APIResponse>(`/feed/answers/${answerId}`);
  },
  // 답변 삭제
  deleteAnswer: (answerId: string) => {
    apiClient.delete<APIResponse>(`/feed/answers/${answerId}`);
  },

  // 좋아요 추가
  setLike: (answerId: string) => {
    apiClient.post<APIResponse>(`/feed/answers/${answerId}/likes`);
  },

  // 좋아요 해제
  cancelLike: (answerId: string) => {
    apiClient.post<APIResponse>(`/feed/answers/${answerId}/cancel-likes`);
  },
} as const;
