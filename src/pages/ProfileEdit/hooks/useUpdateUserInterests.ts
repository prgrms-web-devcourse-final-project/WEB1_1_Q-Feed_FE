import { useMutation } from '@tanstack/react-query';
import { updateUserInterests } from '@/pages/ProfileEdit/api/updateUserInterests';

export const useUpdateUserInterests = () => {
  return useMutation({
    mutationFn: updateUserInterests,
  });
};
