import { apiClient } from '@/api/fetch';
import { CreateAnswerRequest, CreateAnswerResponse } from '../types/answer';

export const createAnswer = async (
  data: CreateAnswerRequest
): Promise<CreateAnswerResponse> => {
  const formData = new FormData();
  formData.append('questionId', data.questionId.toString());
  formData.append('content', data.content);
  formData.append('visibility', data.visibility.toString());

  if (data.image) {
    formData.append('image', data.image);
  }

  const response = await apiClient.post<CreateAnswerResponse>('/feed/answers', formData);
  if (!response.data) {
    throw new Error('No data received from API');
  }

  return response.data;
};
