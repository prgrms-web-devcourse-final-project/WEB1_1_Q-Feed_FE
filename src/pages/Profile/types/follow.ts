export interface FollowStatusRequest {
  followerId: string;
  followeeId: string;
}

export interface FollowStatusResponse {
  isFollowing: boolean;
}

export interface FollowListResponse {
  userId: string;
  nickname: string;
  profileImage: string;
  createdAt: string;
}

export interface FollowQueryParams {
  userId: string;
  cursor?: string;
  size?: number;
}

