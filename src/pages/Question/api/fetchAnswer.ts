import { apiClient } from '@/api/fetch';
import { CreateAnswerRequest, CreateAnswerResponse } from '../types/answer';

export const createAnswer = async (
  data: CreateAnswerRequest
): Promise<CreateAnswerResponse> => {
  const response = await apiClient.post<CreateAnswerResponse>('/feed/answers', data);
  return response.data as CreateAnswerResponse;
};
