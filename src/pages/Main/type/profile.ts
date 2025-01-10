export interface Profile {
  id: number;
  name: string;
  imgsrc?: string;
  followerName: string;
  followerNum: number;
}

export interface ProfileSliderProps {
  initialProfiles?: Profile[];
}

export interface RecommendProfile {
  userId: string;
  nickname: string;
  profileImage: string;
  followerCount: number;
}
