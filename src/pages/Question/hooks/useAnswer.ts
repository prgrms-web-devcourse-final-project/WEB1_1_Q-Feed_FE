import { useMutation } from '@tanstack/react-query';
import { createAnswer } from '@/pages/Question/api/fetchAnswer';
import { CreateAnswerRequest, CreateAnswerResponse } from '../types/answer';
import { useNavigate } from 'react-router';

export const useCreateAnswer = () => {
  const navigate = useNavigate();

  return useMutation<CreateAnswerResponse, unknown, CreateAnswerRequest>({
    mutationFn: createAnswer,
    onSuccess: (data) => {
      console.log('Answer created successfully:', data);
    },
    // [Should] 단순히 로그를 찍는것보다 회원가입 / 로그인 페이지로 리다이렉트 시켜주는게 사용자 경험에 더 좋을거같습니다
    onError: (error) => {
      console.error('Failed to create answer:', error);
      navigate('/login');
    },
  });
};
