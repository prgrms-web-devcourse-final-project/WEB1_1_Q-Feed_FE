import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateAnswerVisibility } from '@/pages/MyPage/api/fetchAnswers';

export const useAnswerVisibility = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ answerId, visibility }: { answerId: number; visibility: boolean }) =>
      updateAnswerVisibility(answerId, { visibility }),
    onSuccess: () => {
      // 특정 키의 데이터를 업데이트하거나 리프레시
      queryClient.invalidateQueries({ queryKey: ['answers'] });
    },
    onError: (error) => {
      console.error('Visibility 업데이트 중 오류:', error);
    },
  });
};
