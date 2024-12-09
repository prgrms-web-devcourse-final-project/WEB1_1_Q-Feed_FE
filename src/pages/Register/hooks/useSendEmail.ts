import { UserAPI } from '@/pages/Register/api/fetchUser';
import { useMutation } from '@tanstack/react-query';

export const useSendEmail = () => {
  return useMutation({
    mutationFn: (email: string) => UserAPI.SendVerificationEmail(email),
    onSuccess: () => {
      // 이메일 전송 성공 시 처리
    },
    onError: (error) => {
      // 에러 처리
      console.error('이메일 전송 실패:', error);
    },
  });
};
