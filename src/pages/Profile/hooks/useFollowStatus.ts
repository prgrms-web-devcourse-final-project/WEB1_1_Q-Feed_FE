import { useQuery } from '@tanstack/react-query';
import { fetchFollowStatus } from '@/pages/Profile/api/fetchFollow';
import { FollowStatusResponse } from '@/pages/Profile/types/follow';

export const useFollowStatus = (followerId: string, followeeId: string) => {
  return useQuery<FollowStatusResponse>({
    queryKey: ['followStatus', followerId, followeeId],
    queryFn: () => fetchFollowStatus(followerId, followeeId),
    enabled: !!followerId && !!followeeId,
  });
};
