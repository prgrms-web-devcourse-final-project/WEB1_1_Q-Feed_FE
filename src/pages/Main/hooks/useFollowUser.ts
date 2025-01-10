import { useMutation } from '@tanstack/react-query';
import { FollowerAPI, FollowRequest } from '@/pages/Main/api/followAPI';

export const useFollowUser = () => {
  return useMutation({
    mutationFn: (followData: FollowRequest) => FollowerAPI.followUser(followData),
    onSuccess: () => {
      console.log('팔로우 성공');
    },
    onError: (error) => {
      console.error('팔로우 실패', error);
    },
  });
};
