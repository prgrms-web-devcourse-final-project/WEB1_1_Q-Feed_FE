export interface SignUpRequest {
  email: string;
  password: string;
  nickname: string;
  description?: string;
  interestCategoryNames?: string[];
}

export interface SignUpResponse {
  message: string;
}
