import { apiClient } from '@/api/fetch';
import { LoginRequest, LoginResponse } from '@/pages/Login/types/auth';

export const authAPI = {
  login: (data: LoginRequest) => apiClient.post<LoginResponse>('/auth/signin', data),
} as const;

export const fetchLogin = async (loginData: LoginRequest): Promise<LoginResponse> => {
  const { data } = await authAPI.login(loginData);
  if (!data) {
    throw new Error('Login failed: No data received');
  }
  return data;
};
