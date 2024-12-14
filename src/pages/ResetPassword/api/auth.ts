import { apiClient } from '@/api/fetch';
import { LoginResponse } from '@/pages/Login/types/auth';
import { ResetRequest } from '@/pages/ResetPassword/type/reset';

export const authAPI = {
  resetpassword: (data: ResetRequest) =>
    apiClient.post<LoginResponse>('/auth/reset-password/confirm', data),
} as const;
