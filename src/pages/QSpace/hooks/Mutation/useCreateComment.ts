import { GROUP_KEYS } from '@/api/queryKeys';
import { groupAPI } from '@/pages/QSpace/api/groupAPI';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useCreateComment = (groupPostId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (content: string) => groupAPI.createComment(groupPostId, content),
    onSuccess: () => {
      // 댓글 목록 갱신
      queryClient.invalidateQueries({
        queryKey: [GROUP_KEYS.ROOT, GROUP_KEYS.ACTIONS.COMMENTS, groupPostId],
      });
    },
  });
};
