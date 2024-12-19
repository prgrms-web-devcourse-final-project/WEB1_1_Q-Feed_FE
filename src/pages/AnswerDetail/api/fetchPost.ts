import { apiClient } from '@/api/fetch';
import { PostDetail, TodayQuestion } from '@/pages/AnswerDetail/type/postType';

export const postAPI = {
  getPostDetail: (postId: number) => apiClient.get<PostDetail>(`/feed/answers/${postId}`),

  getQuestion: (categoryId: number) =>
    apiClient.get<TodayQuestion>(`/feed/questions/daily?category-id=${categoryId}`),
} as const;
