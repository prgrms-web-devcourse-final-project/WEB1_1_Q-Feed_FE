import { fetchQuestions } from '@/pages/Question/api/fetchQuestion';
import { useQuery } from '@tanstack/react-query';

export const useQuestions = (categoryId: number) => {
  return useQuery({
    queryKey: ['questions', 'daily', categoryId] as const,
    queryFn: () => fetchQuestions(categoryId),
    enabled: categoryId !== undefined && categoryId > 0,
  });
};
