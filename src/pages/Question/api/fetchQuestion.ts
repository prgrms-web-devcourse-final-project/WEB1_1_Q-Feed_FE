import { apiClient } from '@/api/fetch';
import { QuestionResponse } from '../types/question';

export const questionAPI = {
  // 특정 카테고리의 질문 조회
  getQuestionByCategory: (categoryId: number) =>
    apiClient.get<QuestionResponse>('/feed/questions/daily', { 'category-id': categoryId }),
};

export const fetchQuestions = async (categoryId: number): Promise<QuestionResponse> => {
  const response = await questionAPI.getQuestionByCategory(categoryId);
  return response.data as QuestionResponse;
};
