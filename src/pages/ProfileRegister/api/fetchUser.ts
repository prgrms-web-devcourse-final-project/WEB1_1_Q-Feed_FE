import { apiClient } from '@/api/fetch';
import { SignUpRequest, SignUpResponse } from '@/pages/ProfileRegister/type/userInfo';
export const authAPI = {
  signUp: (data: SignUpRequest) => apiClient.post<SignUpResponse>('/users/signup', data),
} as const;

export const fetchSignUp = async (signUpData: SignUpRequest): Promise<SignUpResponse> => {
  try {
    const response = await authAPI.signUp(signUpData);

    if (!response || !response.data) {
      throw new Error('No response data received');
    }

    return response.data;
  } catch (error) {
    console.error('회원가입 실패:', error);
    throw error;
  }
};
