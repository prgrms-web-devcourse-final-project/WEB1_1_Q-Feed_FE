import { UserAPI } from '@/pages/Register/api/fetchUser';
import { useMutation } from '@tanstack/react-query';
export const useCheckEmailExist = () => {
  return useMutation({
    mutationFn: (email: string) => UserAPI.checkEmailExist(email),
    onError: (error) => {
      console.error('이메일 확인 실패:', error);
    },
  });
};
