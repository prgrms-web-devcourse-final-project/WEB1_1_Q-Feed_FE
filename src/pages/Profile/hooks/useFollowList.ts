// useFollowHooks.ts
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchFollowingList, fetchFollowerList, followUser, unfollowUser } from '@/pages/Profile/api/fetchFollow';
import { FollowListResponse, FollowQueryParams } from '@/pages/Profile/types/follow';

// 팔로잉 목록 조회 훅
export const useFollowingList = ({ userId, cursor, size = 10 }: FollowQueryParams) =>
  useQuery<FollowListResponse[]>({
    queryKey: ['followingList', { userId, cursor, size }],
    queryFn: async () => fetchFollowingList(userId, cursor, size),
    enabled: Boolean(userId),
  });

// 팔로워 목록 조회 훅
export const useFollowerList = ({ userId, cursor, size = 10 }: FollowQueryParams) =>
  useQuery<FollowListResponse[]>({
    queryKey: ['followerList', { userId, cursor, size }],
    queryFn: async () => fetchFollowerList(userId, cursor, size),
    enabled: Boolean(userId),
  });


// 팔로우/언팔로우 액션 훅
export const useFollowActions = (followerId: string) => {
  const queryClient = useQueryClient();

  // 팔로우 요청
  const follow = useMutation({
    mutationFn: (followeeId: string) => followUser(followerId, followeeId),
    onSuccess: (_, followeeId) => {
      queryClient.setQueryData(['followStatus', followerId, followeeId], true);
      queryClient.invalidateQueries({ queryKey: ['followStatus', followerId, followeeId] });
      queryClient.invalidateQueries({ queryKey: ['userProfile', followeeId] });
      queryClient.invalidateQueries({ queryKey: ['followerList', { userId: followeeId }] });
      queryClient.invalidateQueries({ queryKey: ['followingList', { userId: followerId }] });
    },
    onError: (error) => {
      console.error('Error:', error);
    },
  });

  // 언팔로우 요청
  const unfollow = useMutation({
    mutationFn: (followeeId: string) => unfollowUser(followerId, followeeId),
    onSuccess: (_, followeeId) => {
      queryClient.setQueryData(['followStatus', followerId, followeeId], false);
      queryClient.invalidateQueries({ queryKey: ['followStatus', followerId, followeeId] });
      queryClient.invalidateQueries({ queryKey: ['userProfile', followeeId] });
      queryClient.invalidateQueries({ queryKey: ['followerList', { userId: followeeId }] });
      queryClient.invalidateQueries({ queryKey: ['followingList', { userId: followerId }] });
    },
    onError: (error) => {
      console.error('Error:', error);
    },
  });

  return { follow, unfollow };
};

