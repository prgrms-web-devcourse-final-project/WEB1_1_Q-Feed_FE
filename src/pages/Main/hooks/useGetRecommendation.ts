import { useQuery } from '@tanstack/react-query';
import { FEED_KEYS } from '@/api/queryKeys';
import { FollowerAPI } from '@/pages/Main/api/followAPI';

export const useGetRecommendation = (userId: string) => {
  return useQuery({
    queryKey: [FEED_KEYS.ACTIONS.UserRecommendation, userId],
    queryFn: async () => {
      const response = await FollowerAPI.getRecommendations(userId);

      if (!response.success || !response.data) {
        throw new Error(response.error?.message || '추천 프로필을 불러오는데 실패했습니다');
      }
      return response.data;
    },
  });
};
