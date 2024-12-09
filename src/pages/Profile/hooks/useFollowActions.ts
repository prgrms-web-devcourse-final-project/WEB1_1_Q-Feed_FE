import { useMutation, useQueryClient } from '@tanstack/react-query';
import { followUser, unfollowUser } from '@/pages/Profile/api/fetchFollow'

export const useFollowActions = (followerId: string, followeeId: string) => {
  const queryClient = useQueryClient();

  // 팔로우 요청
  const follow = useMutation({
    mutationFn: () => followUser(followerId, followeeId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['followStatus', followerId, followeeId],
      });
    },
  });

  // 언팔로우 요청
  const unfollow = useMutation({
    mutationFn: () => unfollowUser(followerId, followeeId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['followStatus', followerId, followeeId],
      });
    },
  });

  return { follow, unfollow };
};