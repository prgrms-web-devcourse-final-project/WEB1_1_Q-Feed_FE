import { useMutation } from '@tanstack/react-query';
import { LoginRequest, LoginResponse } from '@/pages/Login/types/auth';
import { fetchLogin } from '@/pages/Login/api/auth';
import { setCookie } from '@/utils/cookies';
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from '@/constants/token';

export const useLogin = () => {
  return useMutation<LoginResponse, Error, LoginRequest>({
    mutationFn: (loginData: LoginRequest) => fetchLogin(loginData),
    onSuccess: (data: LoginResponse) => {
      setCookie(ACCESS_TOKEN_KEY, data.accessToken);
      setCookie(REFRESH_TOKEN_KEY, data.refreshToken);
    },
  });
};
