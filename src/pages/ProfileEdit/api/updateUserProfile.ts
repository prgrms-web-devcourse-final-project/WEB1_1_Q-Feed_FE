import { apiClient } from '@/api/fetch';
import { UpdateUserProfileRequest, UpdateUserProfileResponse } from '../types/userProfile';

export const updateUserProfile = async (
  data: UpdateUserProfileRequest
): Promise<UpdateUserProfileResponse> => {
  const formData = new FormData();
  formData.append('nickname', data.nickname);
  formData.append('description', data.description);

  if (data.profileImageFile) {
    formData.append('profileImageFile', data.profileImageFile);
  }

  const response = await apiClient.patch<UpdateUserProfileResponse>('/users', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  if (!response.data) {
    throw new Error('No data received from API');
  }

  return response.data;
};
