export interface UserProfile {
  userId: string;
  email: string;
  nickname: string;
  profileImageUrl: string | null;
  description: string | null;
  followerCount: number;
  followingCount: number;
}
