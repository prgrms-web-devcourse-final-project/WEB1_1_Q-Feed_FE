import { apiClient } from '@/api/fetch';
import { CreateUserRequest, User } from '@/pages/Register/type/user';

export const UserAPI = {
  // 회원가입
  CreateUser: (data: CreateUserRequest) => apiClient.post<User>('/users/signup', data),
  // 이메일 인증 요청
  SendVerificationEmail: (email: string) => apiClient.post('./auth/email/verify', { email }),

  // 이메일 인증 코드 확인
  verifyEmailCode: (email: string, code: string) =>
    apiClient.post('/auth/email/verify/check', { email, code }),

  checkEmailExist: (email: string) => apiClient.postText('/auth/email/check', email),
};
