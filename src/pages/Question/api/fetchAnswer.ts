import { apiClient } from '@/api/fetch';
import { CreateAnswerRequest, CreateAnswerResponse, AnswerResponse } from '../types/answer';

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

export const getUserAnswerByQuestion = async (
  questionId: string
): Promise<AnswerResponse | null> => {
  try {
    const response = await apiClient.get<AnswerResponse>(
      `/feed/answers/users/question/${questionId}`
    );

    console.log(response);

    if (response.status === 204) {
      return null;
    }

    if (!response.data) {
      throw new Error('No data received from API');
    }

    return response.data;
  } catch (error) {
    console.error('Error fetching user answer:', error);
    throw new Error('Failed to fetch user answer');
  }
};
