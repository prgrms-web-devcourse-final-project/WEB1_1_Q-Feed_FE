import { UserAPI } from '@/pages/Register/api/fetchUser';
import { useMutation } from '@tanstack/react-query';

export const useVerifyEmailCode = () => {
  return useMutation({
    mutationFn: ({ email, code }: { email: string; code: string }) =>
      UserAPI.verifyEmailCode(email, code),
    onSuccess: () => {
      // 인증 성공 시 처리
    },
    onError: (error) => {
      // 에러 처리

      console.error('인증 실패:', error);
    },
  });
};
