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
    try {
      const formData = new FormData();
      formData.append('content', answerData.content);
      formData.append('visibility', String(answerData.visibility)); // boolean 값을 문자열로 변환
      if (answerData.image) {
        formData.append('image', answerData.image);
      }

      const response = await apiClient.patch<ResponseAnswer>(`/feed/answers/${answerId}`, formData);

      if (!response.data) {
        throw new Error('No data returned from the API');
      }

      return response.data;
    } catch (error) {
      console.error('Error updating answer:', error);
      throw error;
    }
  },
} as const;
