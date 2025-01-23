import { FEED_KEYS } from '@/api/queryKeys';
import { PostComments } from '@/pages/AnswerDetail/type/postType';
import { feedAPI } from '@/pages/Main/api/fetchPostList';
import { currentTime, formatISOTime } from '@/pages/Main/util/getCurrentTime';
import { APIResponse } from '@/types/response';
import { useInfiniteQuery } from '@tanstack/react-query';

interface UseFeedAnswersParams {
  categoryId?: number;
  size?: number;
  cursor?: string;
}

interface CommentsResponse {
  answers: PostComments[];
  nextCursor?: string;
}

export const useGetComments = ({ categoryId = 1, size = 2 }: UseFeedAnswersParams) => {
  return useInfiniteQuery<PostComments[], Error>({
    queryKey: [FEED_KEYS.ACTIONS.FeedList, categoryId],
    queryFn: async ({ pageParam = currentTime }) => {
      const cursor = typeof pageParam === 'string' ? pageParam : currentTime;

      try {
        // 명시적인 타입 지정
        const response = (await feedAPI.getInfinitePosts({
          cursor,
          categoryId,
          size,
        })) as APIResponse<CommentsResponse>;

        // 타입 가드를 통한 안전한 데이터 추출
        if (response.success && response.data) {
          return response.data.answers || [];
        }

        // 오류 처리 개선
        if (response.error) {
          const errorMessage =
            typeof response.error === 'string' ? response.error : response.error.message;
          console.error('API 호출 오류:', errorMessage);
        }

        return [];
      } catch (error) {
        console.error('네트워크 오류:', error);
        return [];
      }
    },
    initialPageParam: currentTime,
    getNextPageParam: (lastPage: PostComments[]) => {
      if (lastPage.length === 0 || lastPage.length < size) {
        console.log('마지막 페이지 도달');
        return undefined;
      }

      const lastItem = lastPage[lastPage.length - 1];
      const nextCursor = formatISOTime(lastItem?.createdAt) || currentTime;

      return nextCursor || undefined;
    },
  });
};
