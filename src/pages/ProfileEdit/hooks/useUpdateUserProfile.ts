import { useMutation } from '@tanstack/react-query';
import { updateUserProfile } from '../api/updateUserProfile';
import { UpdateUserProfileRequest, UpdateUserProfileResponse } from '../types/userProfile';

export const useUpdateUserProfile = () => {
  return useMutation<UpdateUserProfileResponse, Error, UpdateUserProfileRequest>({
    mutationFn: updateUserProfile,
  });
};
