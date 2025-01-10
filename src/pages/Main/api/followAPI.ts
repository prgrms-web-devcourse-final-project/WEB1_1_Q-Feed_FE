import { apiClient } from '@/api/fetch';
import { RecommendProfile } from '@/pages/Main/type/profile';
import { APIResponse } from '@/types/response';

export interface FollowRequest {
  followerId: string;
  followeeId: string;
}

export const FollowerAPI = {
  followUser: (followData: FollowRequest) => apiClient.post<void>('/follows', followData),

  getRecommendations: (userId: string) =>
    apiClient.get<APIResponse<RecommendProfile[]>>(`/recommendations/${userId}`),
} as const;
