import { GROUP_KEYS } from '@/api/queryKeys';
import { groupAPI } from '@/pages/QSpace/api/groupAPI';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useCancelCommentLike = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (commentId: number) => groupAPI.cancelLikeComment(commentId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [GROUP_KEYS.ROOT, GROUP_KEYS.ACTIONS.COMMENTS],
      });
    },
  });
};
