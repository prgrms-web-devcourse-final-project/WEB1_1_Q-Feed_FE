import { useQuery } from '@tanstack/react-query';
import { FEED_KEYS } from '@/api/queryKeys';
import { AnswerData } from '@/pages/Main/type/answer';
import { feedAPI } from '@/pages/Main/api/fetchPostList';

export const useFetchMyAnswer = (questionId: number) => {
  return useQuery<AnswerData>({
    queryKey: [FEED_KEYS.ACTIONS.MyAnswer, questionId],
    queryFn: async () => {
      const response = await feedAPI.getMyAnswer(questionId);

      if (!response.success || !response.data) {
        throw new Error(response.error?.message || '나의 답변을 불러오는데 실패했습니다');
      }
      return response.data;
    },
  });
};
