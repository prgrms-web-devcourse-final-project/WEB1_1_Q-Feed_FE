import { GROUP_KEYS } from '@/api/queryKeys';
import { groupAPI } from '@/pages/QSpace/api/groupAPI';
import { useQuery } from '@tanstack/react-query';

export const useComments = (groupPostId: number) => {
  return useQuery({
    queryKey: [GROUP_KEYS.ROOT, GROUP_KEYS.ACTIONS.COMMENTS, groupPostId],
    queryFn: () => groupAPI.getComments(groupPostId),
    enabled: !!groupPostId,
  });
};
