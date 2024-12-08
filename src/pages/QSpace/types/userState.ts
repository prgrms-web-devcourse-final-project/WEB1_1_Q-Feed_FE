export interface UserState {
  userId: string | null;
  isLoggedIn: boolean;
  profile: {
    nickname: string;
    profileImage: string;
  } | null;
}
