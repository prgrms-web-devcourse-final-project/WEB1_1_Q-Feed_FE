import { useMutation, useQuery } from '@tanstack/react-query';
import { createAnswer } from '@/pages/Question/api/fetchAnswer';
import { CreateAnswerRequest, CreateAnswerResponse, AnswerResponse } from '../types/answer';
import { getUserAnswerByQuestion } from '@/pages/Question/api/fetchAnswer';

export const useCreateAnswer = () => {
  return useMutation<CreateAnswerResponse, unknown, CreateAnswerRequest>({
    mutationFn: createAnswer,
    onSuccess: (data) => {
      console.log('Answer created successfully:', data);
    },
    onError: (error) => {
      console.error('Failed to create answer:', error);
    },
  });
};

export const useUserAnswer = (questionId: string) => {
  return useQuery<AnswerResponse | null, Error>({
    queryKey: ['userAnswer', questionId],
    queryFn: () => getUserAnswerByQuestion(questionId),
    enabled: !!questionId,
  });
};
