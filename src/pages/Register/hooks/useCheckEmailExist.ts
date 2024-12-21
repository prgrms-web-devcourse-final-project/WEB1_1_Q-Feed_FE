import { UserAPI } from '@/pages/Register/api/fetchUser';
import { useMutation } from '@tanstack/react-query';
export const useCheckEmailExist = () => {
  return useMutation({
    mutationFn: async (email: string) => {
      const response = await UserAPI.checkEmailExist(email);
      return response.data;
    },
    onError: (error) => {
      console.error('이메일 확인 실패:', error);
    },
  });
};
