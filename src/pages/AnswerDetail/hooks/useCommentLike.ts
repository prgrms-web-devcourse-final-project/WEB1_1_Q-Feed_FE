import { useMutation } from '@tanstack/react-query';
import { postAPI } from '@/pages/AnswerDetail/api/fetchPost';

export const useCommentLike = () => {
  return useMutation({
    mutationFn: async (commentId: number) => {
      const response = await postAPI.setCommentLike(commentId);
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
