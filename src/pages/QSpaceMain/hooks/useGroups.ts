import { useQuery } from '@tanstack/react-query';
import { groupsAPI } from '../api/groups';

export const useGroups = (category: string, showOnlyRecruiting: boolean) => {
  const query = useQuery({
    queryKey: ['groups', category, showOnlyRecruiting],
    queryFn: () => groupsAPI.fetchGroups(category, showOnlyRecruiting),
    networkMode: 'always',
  });

  if (query.error) {
    console.error('Failed to fetch groups:', query.error);
  }

  return {
    ...query,
    data: query.data ?? [],
  };
};
