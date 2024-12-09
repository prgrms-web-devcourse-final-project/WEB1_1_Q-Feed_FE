import { fetchGroups } from '@/pages/QSpace/api/fetchGroups';
import { useQuery } from '@tanstack/react-query';

export const useGroups = (categoryId: number) => {
  return useQuery({
    queryKey: ['groups', 'list', categoryId] as const,
    queryFn: () => fetchGroups(categoryId),
    enabled: categoryId !== undefined,
  });
};
