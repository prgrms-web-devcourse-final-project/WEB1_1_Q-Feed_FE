export interface FollowStatusRequest {
  followerId: string;
  followeeId: string;
}

export interface FollowStatusResponse {
  isFollowing: boolean;
}
