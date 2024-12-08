export interface User {
  email: string;
  password: string;
  nickname: string;
  profileImageFile: string;
  description: string;
  interestCategoryNames: string[];
}

export interface Email {
  email: string;
}

export interface CreateUserRequest {
  message: string;
}
