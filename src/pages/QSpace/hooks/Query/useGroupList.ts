import { GROUP_KEYS } from '@/api/queryKeys';
import { fetchGroups } from '@/pages/QSpace/api/fetchGroups';
import { useQuery } from '@tanstack/react-query';

export const useGroups = (categoryId: number) => {
  return useQuery({
    queryKey: [GROUP_KEYS.ROOT, GROUP_KEYS.ACTIONS.LIST, categoryId] as const,
    queryFn: () => fetchGroups(categoryId),
    enabled: categoryId !== undefined,
    staleTime: 0,
    refetchOnMount: 'always',
  });
};
