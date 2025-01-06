import { apiClient } from '@/api/fetch';
import { Group } from '@/pages/MyPage/types/group';

export const fetchUserGroups = async (): Promise<Group[]> => {
  const response = await apiClient.get<Group[]>('/groups/user');

  if (!response.data) {
    throw new Error('No data received from the server.');
  }

  return response.data;
};
