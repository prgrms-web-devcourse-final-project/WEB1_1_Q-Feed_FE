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
