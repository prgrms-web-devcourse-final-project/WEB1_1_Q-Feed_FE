import { useMutation } from '@tanstack/react-query';
import { feedAPI } from '@/pages/Main/api/fetchPostList';

export const useDeleteAnswer = (answerId: string) => {
  return useMutation({
    mutationFn: async () => {
      const response = await feedAPI.deleteAnswer(answerId);
      return response;
    },
  });
};
