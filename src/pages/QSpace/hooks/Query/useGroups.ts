import { GROUP_KEYS } from '@/api/queryKeys';
import { fetchGroups } from '@/pages/QSpace/api/fetchGroups';
import { useInfiniteQuery, InfiniteData } from '@tanstack/react-query';
import { Group } from '@/pages/QSpace/types/group';

interface GroupsResponse {
  items: Group[];
  nextCursor: string | undefined;
}

export const useGroups = (categoryId: number) => {
  return useInfiniteQuery<
    GroupsResponse,
    Error,
    InfiniteData<GroupsResponse>,
    [string, string, number],
    string | undefined
  >({
    queryKey: [GROUP_KEYS.ROOT, GROUP_KEYS.ACTIONS.LIST, categoryId] as const,
    initialPageParam: undefined,
    queryFn: async ({ pageParam }) => {
      const response = await fetchGroups(categoryId, pageParam, 10);
      return {
        items: response,
        nextCursor: response.length === 10 ? response[response.length - 1].createdAt : undefined,
      };
    },
    getNextPageParam: (lastPage) => lastPage.nextCursor,
    enabled: categoryId !== undefined,
    staleTime: 0,
    refetchOnMount: 'always',
  });
};
