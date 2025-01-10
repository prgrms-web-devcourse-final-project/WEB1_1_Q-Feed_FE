import { FEED_KEYS } from '@/api/queryKeys';
import { feedAPI } from '@/pages/Main/api/fetchPostList';
import { FeedParams } from '@/pages/Main/type/answer';
import { useInfiniteQuery } from '@tanstack/react-query';

export const useFetchFeedAnswers = (params: FeedParams) => {
  return useInfiniteQuery({
    queryKey: [FEED_KEYS.ACTIONS.FeedAnswers, params],
    queryFn: async ({ pageParam }) => {
      const safePageParam = pageParam ?? '';

      const response = await feedAPI.getFeedAnswers({
        answerCursor: typeof safePageParam === 'string' ? safePageParam : '',
      });

      const answers = response.data ?? [];

      return {
        answers,
        nextCursor:
          answers.length > 0 ? answers[answers.length - 1].answerId.toString() : undefined,
      };
    },
    getNextPageParam: (lastPage) => lastPage.nextCursor || undefined,
    initialPageParam: '',
  });
};
