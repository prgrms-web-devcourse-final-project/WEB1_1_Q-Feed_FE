import { useMutation, useQueryClient } from '@tanstack/react-query';
import { followUser, unfollowUser } from '@/pages/Profile/api/fetchFollow'

export const useFollowActions = (followerId: string, followeeId: string) => {
  const queryClient = useQueryClient();

  // 팔로우 요청
  const follow = useMutation({
    mutationFn: () => followUser(followerId, followeeId),
    onSuccess: () => {
      queryClient.setQueryData(['followStatus', followerId, followeeId], true);
      queryClient.invalidateQueries({ queryKey: ['followStatus', followerId, followeeId] });
      queryClient.invalidateQueries({ queryKey: ['userProfile', followeeId] });
    },
    onError: (error) => {
      console.error('Error:', error);
    },
  });

  // 언팔로우 요청
  const unfollow = useMutation({
    mutationFn: () => unfollowUser(followerId, followeeId),
    onSuccess: () => {
      queryClient.setQueryData(['followStatus', followerId, followeeId], false);
      queryClient.invalidateQueries({ queryKey: ['followStatus', followerId, followeeId] });
      queryClient.invalidateQueries({ queryKey: ['userProfile', followeeId] });
    },
    onError: (error) => {
      console.error('Error:', error);
    },
  });

  return { follow, unfollow };
};