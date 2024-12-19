import { apiClient } from '@/api/fetch';
import { FollowStatusResponse } from '@/pages/Profile/types/follow';

// 팔로우 상태 확인
export const fetchFollowStatus = async (followerId: string, followeeId: string): Promise<FollowStatusResponse> => {
  const response = await apiClient.get<FollowStatusResponse>(
    '/follows/check',
    { followerId, followeeId }
  );

  console.log('Response from server:', response);

  if (!response.data) {
    throw new Error('No data received from API');
  }

  return response.data;
};

// 팔로우 요청
export const followUser = async (followerId: string, followeeId: string): Promise<void> => {
  const response = await apiClient.post('/follows', {
    followerId,
    followeeId,
  });

  console.log('response', response);

  if (!response.data) {
    throw new Error('No data received from API');
  }
};

// 언팔로우 요청
export const unfollowUser = async (followerId: string, followeeId: string): Promise<void> => {
  const response = await apiClient.delete('/follows', {
    data: {
      followerId,
      followeeId,
    }
  });

  console.log('response', response);

  if (!response.data) {
    throw new Error('No data received from API');
  }
};
