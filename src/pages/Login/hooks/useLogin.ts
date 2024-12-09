import { AUTH_KEYS } from '@/api/queryKeys';
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from '@/constants/token';
import { fetchLogin } from '@/pages/Login/api/auth';
import { LoginRequest, LoginResponse } from '@/pages/Login/types/auth';
import { useUserStore } from '@/store/userStore';
import { setCookie } from '@/utils/cookies';
import { useMutation } from '@tanstack/react-query';

export const useLogin = () => {
  const { setUserId } = useUserStore();

  return useMutation<LoginResponse, Error, LoginRequest>({
    mutationKey: [AUTH_KEYS.ROOT, AUTH_KEYS.ACTIONS.LOGIN],
    mutationFn: async (loginData: LoginRequest) => {
      const response = await fetchLogin(loginData);
      return response;
    },
    onSuccess: (data: LoginResponse) => {
      setCookie(ACCESS_TOKEN_KEY, data.accessToken);
      setCookie(REFRESH_TOKEN_KEY, data.refreshToken);

      setUserId(data.userId);
    },
    onError: (error: Error) => {
      console.error('Login error:', error);
    },
  });
};
