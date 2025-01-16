// fetchFollows.ts
import { apiClient } from '@/api/fetch';
import { FollowStatusResponse, FollowListResponse } from '@/pages/Profile/types/follow';

// 팔로우 상태 확인
export const fetchFollowStatus = async (followerId: string, followeeId: string): Promise<FollowStatusResponse> => {
  const response = await apiClient.get<FollowStatusResponse>(
    '/follows/check',
    { params: { followerId, followeeId } }
  );

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
    },
  });

  if (!response.data) {
    throw new Error('No data received from API');
  }
};

// 팔로잉 목록 조회
export const fetchFollowingList = async (
  userId: string,
  cursor?: string,
  size: number = 10
): Promise<FollowListResponse[]> => {
  const response = await apiClient.get<FollowListResponse[]>(`/follows/followings/${userId}`, {
    cursor,
    size,
  });

  if (!response.data) {
    throw new Error('No data received from API');
  }

  return response.data;
};

// 팔로워 목록 조회
export const fetchFollowerList = async (
  userId: string,
  cursor?: string,
  size: number = 10
): Promise<FollowListResponse[]> => {
  const response = await apiClient.get<FollowListResponse[]>(`/follows/followers/${userId}`, {
    cursor,
    size,
  });

  if (!response.data) {
    throw new Error('No data received from API');
  }

  return response.data;
};
