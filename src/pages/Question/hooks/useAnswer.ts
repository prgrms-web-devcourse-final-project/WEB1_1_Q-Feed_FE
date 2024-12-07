import { useMutation } from '@tanstack/react-query';
import { createAnswer } from '@/pages/Question/api/fetchAnswer';
import { CreateAnswerRequest, CreateAnswerResponse } from '../types/answer';

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
