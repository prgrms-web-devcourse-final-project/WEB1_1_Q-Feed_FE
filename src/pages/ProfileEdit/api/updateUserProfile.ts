import { apiClient } from '@/api/fetch';
import { UpdateUserProfileRequest, UpdateUserProfileResponse, ApiErrorResponse } from '../types/userProfile';

export const updateUserProfile = async (
  data: UpdateUserProfileRequest
): Promise<UpdateUserProfileResponse> => {
  const formData = new FormData();
  formData.append('nickname', data.nickname);
  formData.append('description', data.description);

  if (data.profileImageFile) {
    formData.append('profileImageFile', data.profileImageFile);
  }

  try {
    const response = await apiClient.patch<UpdateUserProfileResponse>('/users', formData);

    if (!response.data) {
      throw new Error('No data received from API');
    }

    return response.data;
  } catch (error: unknown) {
    if (isApiErrorResponse(error)) {
      throw new Error(error.status.toString()); // 서버 에러 메시지를 throw
    }

    throw new Error('프로필 업데이트 중 문제가 발생했습니다.');
  }
};

function isApiErrorResponse(error: unknown): error is ApiErrorResponse {
  return (
    typeof error === 'object' &&
    error !== null &&
    'error' in error &&
    typeof (error as ApiErrorResponse).error === 'object' &&
    'message' in (error as ApiErrorResponse).error &&
    typeof (error as ApiErrorResponse).error.message === 'string' &&
    'status' in error &&
    typeof (error as ApiErrorResponse).status === 'number' &&
    'success' in error &&
    typeof (error as ApiErrorResponse).success === 'boolean'
  );
}
