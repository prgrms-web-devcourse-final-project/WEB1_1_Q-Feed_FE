import { GROUP_KEYS } from '@/api/queryKeys';
import { groupAPI } from '@/pages/QSpace/api/groupAPI';
import { Reply } from '@/pages/QSpace/types/group';
import { useQuery } from '@tanstack/react-query';

export const useComments = (groupPostId: number) => {
  return useQuery<Reply[], Error>({
    queryKey: [GROUP_KEYS.ROOT, GROUP_KEYS.ACTIONS.COMMENTS, groupPostId],
    queryFn: async () => {
      const response = await groupAPI.getComments(groupPostId);
      if (!response.success || !response.data) {
        throw new Error(response.error?.message || 'Failed to fetch comments');
      }
      return response.data;
    },
    enabled: !!groupPostId,
  });
};
