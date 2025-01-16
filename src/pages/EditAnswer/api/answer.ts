import { apiClient } from '@/api/fetch';

export interface RequestAnswer {
  content: string;
  image: File | undefined;
  visibility: boolean;
}

export interface ResponseAnswer {
  message: string;
}

export const FeedAPI = {
  updateAnswer: async (answerId: string, answerData: RequestAnswer): Promise<ResponseAnswer> => {
    const response = await apiClient.patch<ResponseAnswer>(`/feed/answers/${answerId}`, answerData);

    if (!response.data) {
      throw new Error('No data returned from the API');
    }

    return response.data;
  },
} as const;
