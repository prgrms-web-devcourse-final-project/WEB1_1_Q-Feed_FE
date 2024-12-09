import { useQuery } from '@tanstack/react-query';
import { fetchAnswersCount } from '@/pages/MyPage/api/fetchAnswers';

export const useAnswersCount = (userId: string) => {
  return useQuery({
    queryKey: ['answersCount', userId],
    queryFn: () => fetchAnswersCount(userId),
    enabled: !!userId, // userId가 있을 때만 실행
  });
};