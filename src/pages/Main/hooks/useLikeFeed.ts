import { useMutation } from '@tanstack/react-query';
import { feedAPI } from '@/pages/Main/api/fetchPostList';

export const useLikeFeed = () => {
  return useMutation({
    mutationFn: async (answerId: string) => {
      const response = await feedAPI.setLike(answerId);
      return response;
    },
    onSuccess: () => {
      console.log(` 좋아요 성공 `);
    },
    onError: (error) => {
      console.error('좋아요 실패', error);
    },
  });
};
