import { apiClient } from '@/api/fetch';
import { answerRequest, answerResponse } from '@/pages/AnswerDetail/type/commentType';
import { PostDetail, TodayQuestion } from '@/pages/AnswerDetail/type/postType';
import { CommentsResponse } from '@/pages/Main/type/comment';
import { APIResponse } from '@/types/response';

export const postAPI = {
  // 답변 상세 조회
  getInfiniteDetailPost: (params: { answerId: number; cursor: string; size: number }) =>
    apiClient.get<APIResponse<CommentsResponse>>(
      `/feed/answers/${params.answerId}?commentCursor=${params.cursor}&size=${params.size}`
    ),

  getPostDetail: (postId: number) => apiClient.get<PostDetail>(`/feed/answers/${postId}`),

  getQuestion: (categoryId: number) =>
    apiClient.get<TodayQuestion>(`/feed/questions/daily?category-id=${categoryId}`),

  addComment: (data: answerRequest) => apiClient.post<answerResponse>(`/feed/comments`, data),

  // 딥글 좋아요 추가
  setPostLike: (answerId: number) => {
    apiClient.post<APIResponse>(`/feed/answers/${answerId}/likes`);
  },

  // 답글 좋아요 해제
  canclePostLike: (answerId: number) => {
    apiClient.post<APIResponse>(`/feed/answers/${answerId}/cancel-likes`);
  },

  // 대댓글 좋아요 추가
  setCommentLike: (commentId: number) => {
    apiClient.post<APIResponse>(`/feed/comments/${commentId}/likes`);
  },

  // 대댓글 좋아요 해제
  cancleCommentLike: (commentId: number) => {
    apiClient.post<APIResponse>(`/feed/comments/${commentId}/cancel-likes`);
  },
} as const;
