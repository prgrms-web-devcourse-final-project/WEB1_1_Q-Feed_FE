import { apiClient } from '@/api/fetch';
import { SignUpRequest, SignUpResponse } from '@/pages/ProfileRegister/type/userInfo';
import { ActionResponse } from '@/types/response';

export const authAPI = {
  signUp: (data: SignUpRequest): Promise<ActionResponse<SignUpResponse>> => {
    const formData = new FormData();
    formData.append('email', data.email);
    formData.append('password', data.password);
    formData.append('nickname', data.nickname);

    if (data.description) {
      formData.append('description', data.description);
    }

    if (data.interestCategoryNames && data.interestCategoryNames.length > 0) {
      data.interestCategoryNames.forEach((tag) => {
        formData.append(`interestCategoryNames`, tag);
      });
    }
    if (data.profileImageFile) {
      formData.append('profileImageFile', data.profileImageFile);
    }

    return apiClient.post<SignUpResponse>('/users/signup', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },

  checkNickname: (nickname: string) =>
    apiClient.postText<boolean>('/auth/nickname/check', nickname),
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
