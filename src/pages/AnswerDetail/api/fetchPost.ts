import { apiClient } from '@/api/fetch';
import { answerRequest, answerResponse } from '@/pages/AnswerDetail/type/commentType';
import { PostDetail, TodayQuestion } from '@/pages/AnswerDetail/type/postType';
import { APIResponse } from '@/types/response';

export const postAPI = {
  getPostDetail: (postId: number) => apiClient.get<PostDetail>(`/feed/answers/${postId}`),

  getQuestion: (categoryId: number) =>
    apiClient.get<TodayQuestion>(`/feed/questions/daily?category-id=${categoryId}`),

  addComment: (data: answerRequest) => apiClient.post<answerResponse>(`/feed/comments`, data),

  // 대댓글 좋아요 추가
  setCommentLike: (commentId: number) => {
    apiClient.post<APIResponse>(`/feed/comments/${commentId}/likes`);
  },

  // 대댓글 좋아요 해제
  cancleCommentLike: (commentId: number) => {
    apiClient.post<APIResponse>(`/feed/comments/${commentId}/likes`);
  },
} as const;
