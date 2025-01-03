import { GROUP_KEYS } from '@/api/queryKeys';
import { groupAPI } from '@/pages/QSpace/api/groupAPI';
import { Reply } from '@/pages/QSpace/types/group';
import { useQuery } from '@tanstack/react-query';

export const useComment = (postId: number) => {
  return useQuery<Reply[], Error>({
    queryKey: [GROUP_KEYS.ROOT, GROUP_KEYS.ACTIONS.COMMENTS, postId],
    queryFn: async () => {
      const response = await groupAPI.getComments(postId);
      if (!response.success || !response.data) {
        throw new Error(response.error?.message || 'Failed to fetch comments');
      }
      return response.data;
    },
    enabled: postId > 0,
  });
};
