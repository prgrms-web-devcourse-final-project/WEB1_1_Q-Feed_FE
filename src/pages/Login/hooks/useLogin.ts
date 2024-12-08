import { useMutation } from '@tanstack/react-query';
import { LoginRequest, LoginResponse } from '@/pages/Login/types/auth';
import { fetchLogin } from '@/pages/Login/api/auth';
import { setCookie } from '@/utils/cookies';
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from '@/constants/token';
import { AUTH_KEYS } from '@/api/queryKeys';
import { useUserStore } from '@/store/userStore';

export const useLogin = () => {
  const setUserId = useUserStore((state) => state.setUserId);

  return useMutation<LoginResponse, Error, LoginRequest>({
    mutationKey: [AUTH_KEYS.ROOT, AUTH_KEYS.ACTIONS.LOGIN],
    mutationFn: (loginData: LoginRequest) => fetchLogin(loginData),
    onSuccess: (data: LoginResponse) => {
      // 토큰 저장
      setCookie(ACCESS_TOKEN_KEY, data.accessToken);
      setCookie(REFRESH_TOKEN_KEY, data.refreshToken);

      // userId 저장
      setUserId(data.userId);
    },
  });
};
