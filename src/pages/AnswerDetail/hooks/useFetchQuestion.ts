import { useQuery } from '@tanstack/react-query';
import { POST_KEYS } from '@/api/queryKeys';
import { postAPI } from '@/pages/AnswerDetail/api/fetchPost';
import { TodayQuestion } from '@/pages/AnswerDetail/type/postType';

export const useFetchQuestion = (categoryId: number) => {
  return useQuery<TodayQuestion>({
    queryKey: [POST_KEYS.ACTIONS.Question, categoryId],
    queryFn: async () => {
      const response = await postAPI.getQuestion(categoryId);

      if (!response.success || !response.data) {
        throw new Error(response.error?.message || '질문을 불러오는데 실패했습니다');
      }
      return response.data;
    },
  });
};
