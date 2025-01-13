import { useQuery } from '@tanstack/react-query';
import { FEED_KEYS } from '@/api/queryKeys';
import { trendPostAPI } from '@/pages/Main/api/trendPostAPI';

export const useGetTrendingPosts = (categoryId: number) => {
  return useQuery({
    queryKey: [FEED_KEYS.ACTIONS.TrendPosts, categoryId],
    queryFn: async () => {
      const response = await trendPostAPI.getRecommendations(categoryId);

      if (!response.success || !response.data) {
        throw new Error(response.error?.message || '인기글 목록을 불러오는데 실패했습니다');
      }
      return response.data;
    },
  });
};
