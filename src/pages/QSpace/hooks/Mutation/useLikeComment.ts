import { GROUP_KEYS } from '@/api/queryKeys';
import { groupAPI } from '@/pages/QSpace/api/groupAPI';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useLikeComment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (commentId: number) => groupAPI.likeComment(commentId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [GROUP_KEYS.ROOT, GROUP_KEYS.ACTIONS.COMMENTS],
      });
    },
  });
};
