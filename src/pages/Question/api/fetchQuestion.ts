import { apiClient } from '@/api/fetch';
import { QuestionResponse } from '../types/question';

export const questionAPI = {
  getQuestionByCategory: (categoryId: number) =>
    apiClient.get<QuestionResponse>('/feed/questions/daily', { 'category-id': categoryId }),
};

export const fetchQuestions = async (categoryId: number): Promise<QuestionResponse> => {
  const response = await questionAPI.getQuestionByCategory(categoryId);

  if (!response.data) {
    throw new Error('No data received from API');
  }

  return response.data;
};
