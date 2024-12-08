export interface SignUpRequest {
  email: string;
  password: string;
  nickname: string;
  profileImageFile?: File;
  description?: string;
  interestCategoryNames?: string[];
}

export interface SignUpResponse {
  message: string;
}
