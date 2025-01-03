import { GROUP_KEYS } from '@/api/queryKeys';
import { groupAPI } from '@/pages/QSpace/api/groupAPI';
import { useQueries } from '@tanstack/react-query';

export const useMultiComments = (postIds: number[]) => {
  return useQueries({
    queries: postIds.map((id) => ({
      queryKey: [GROUP_KEYS.ROOT, GROUP_KEYS.ACTIONS.COMMENTS, id],
      queryFn: async () => {
        const response = await groupAPI.getComments(id);
        if (!response.success || !response.data) {
          throw new Error(response.error?.message || 'Failed to fetch comments');
        }
        return response.data;
      },
      enabled: id > 0,
    })),
  });
};
