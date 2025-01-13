import { useMutation } from '@tanstack/react-query';
import { postAPI } from '@/pages/AnswerDetail/api/fetchPost';
import { answerRequest, answerResponse } from '@/pages/AnswerDetail/type/commentType';

export const useAddComments = () => {
  return useMutation<answerResponse, Error, answerRequest>({
    mutationFn: async (data: answerRequest) => {
      // API 호출 시 필요한 데이터를 전달
      const response = await postAPI.addComment(data);
      if (!response.success || !response.data) {
        throw new Error(response.error?.message || '댓글 추가에 실패했습니다.');
      }
      return response.data;
    },
  });
};
