import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchUserAnswers } from '@/pages/MyPage/api/fetchAnswers';
import { FetchAnswersResponse } from '../types/answer';

export const useInfiniteAnswers = (
  userId: string,
  pageSize: number = 10 // 기본 페이지 크기 설정
) => {
  return useInfiniteQuery<FetchAnswersResponse>({
    queryKey: ['answers', userId, pageSize],
    queryFn: ({ pageParam }) =>
      fetchUserAnswers(userId, pageParam as string | null, pageSize), // pageParam 타입 캐스팅
    getNextPageParam: (lastPage) => {
      const lastAnswer = lastPage.answers[lastPage.answers.length - 1];
      return lastAnswer ? lastAnswer.createdAt : null; // 다음 커서 반환
    },
    initialPageParam: null, // 초기 커서 값 설정
    enabled: Boolean(userId), // userId가 있을 때만 활성화
  });
};
