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

function getCookie(name: string): string | null {
  const matches = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return matches ? decodeURIComponent(matches[1]) : null;
}

export const fcmAPI = {
  saveToken: (fcmToken: string) =>
    apiClient.post(
      '/notifications/fcmTokenSaves',
      { fcmToken },
      {
        headers: {
          Authorization: `Bearer ${getCookie('accessToken')}`,
        },
      }
    ),
} as const;

export const saveFcmToken = async (fcmToken: string): Promise<void> => {
  try {
    console.log('보내는 FCM 토큰:', { fcmToken }); // 확인용 로그
    await fcmAPI.saveToken(fcmToken);
    console.log('FCM 토큰이 서버에 성공적으로 저장되었습니다.');
  } catch (error) {
    console.error('FCM 토큰 저장 실패:', error);
    throw error;
  }
};
