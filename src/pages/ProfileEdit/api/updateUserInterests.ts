import { apiClient } from '@/api/fetch';

export const updateUserInterests = async (tags: string[]): Promise<{ message: string }> => {
  const response = await apiClient.put<{ message: string }>('/users/interests', tags);
  console.log(response);
  if (!response.data) {
    throw new Error('서버로부터 응답이 없습니다.');
  }
  return response.data;
};
