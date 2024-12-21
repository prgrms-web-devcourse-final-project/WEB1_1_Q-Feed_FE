import { apiClient } from '@/api/fetch';
import { FetchAnswersResponse, UpdateAnswerVisibilityRequest, FetchAnswersCountResponse } from '../types/answer';


export const fetchUserAnswers = async (
  userId: string,
  answerCursor: string | null,
  size: number = 10
): Promise<FetchAnswersResponse> => {
  const response = await apiClient.get<FetchAnswersResponse>(
    `/feed/answers/users/${userId}`,
    {
      userId,
      answerCursor,
      size,
    }
  );

  if (!response.data) {
    throw new Error('No data received from API');
  }

  return response.data;
};

export const updateAnswerVisibility = async (
  answerId: number,
  data: UpdateAnswerVisibilityRequest
): Promise<void> => {
  await apiClient.patch(`/feed/answers/${answerId}/visibility`, data);
};

export const fetchAnswersCount = async (userId: string): Promise<FetchAnswersCountResponse> => {
  const response = await apiClient.get<FetchAnswersCountResponse>(
    `/feed/answers/users/${userId}/count`
  );

  if (!response.data) {
    throw new Error('No data received from API');
  }

  return response.data;
};