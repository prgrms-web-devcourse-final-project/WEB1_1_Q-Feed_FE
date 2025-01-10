import { apiClient } from '@/api/fetch';
import { PopularPost } from '@/pages/Main/type/popularPosts';
import { APIResponse } from '@/types/response';

export const trendPostAPI = {
  getRecommendations: (categoryId: number) =>
    apiClient.get<APIResponse<PopularPost[]>>(`/feed/answers/trending?category-id=${categoryId}`),
} as const;
