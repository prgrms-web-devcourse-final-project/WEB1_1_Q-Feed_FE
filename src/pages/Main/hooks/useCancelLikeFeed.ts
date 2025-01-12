import { useMutation } from '@tanstack/react-query';
import { feedAPI } from '@/pages/Main/api/fetchPostList';

export const useCancelLike = () => {
  return useMutation({
    mutationFn: async (answerId: string) => {
      const response = await feedAPI.cancelLike(answerId); // 좋아요 취소 요청
      return response;
    },
    onSuccess: () => {
      console.log('좋아요 취소 성공');
    },
    onError: (error) => {
      console.error('좋아요 취소 실패', error);
    },
  });
};
