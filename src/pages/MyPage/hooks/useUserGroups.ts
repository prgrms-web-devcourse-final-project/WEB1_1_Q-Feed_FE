import { useQuery } from '@tanstack/react-query';
import { fetchUserGroups } from '@/pages/MyPage/api/fetchUserGroups';
import { Group } from '@/pages/MyPage/types/group';

export const useUserGroups = () => {
  return useQuery<Group[], Error>({
    queryKey: ['userGroups'],
    queryFn: fetchUserGroups,
  });
};
