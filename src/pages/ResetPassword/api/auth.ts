import { apiClient } from '@/api/fetch';
import { ResetRequest, ResetResponse } from '@/pages/ResetPassword/type/reset';

export const resetAPI = {
  resetpassword: (data: ResetRequest) =>
    apiClient.post<ResetResponse>('/auth/reset-password', data),
} as const;
