import { apiClient } from '@/api/fetch';
import { UserProfile } from '../types/profile';

export const fetchUserProfile = async (userId: string): Promise<UserProfile> => {
  const response = await apiClient.get<UserProfile>(`/users/${userId}`);

  if (!response.data) {
    throw new Error('No data received from API');
  }

  return response.data;
};

export const fetchUserInterests = async (userId: string): Promise<string[]> => {
  const response = await apiClient.get<string[]>(`/users/${userId}/interests`);

  if (!response.data) {
    throw new Error('No data received from API');
  }

  return response.data;
};


