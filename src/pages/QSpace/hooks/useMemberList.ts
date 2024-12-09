import { useQuery } from '@tanstack/react-query';
import { GROUP_KEYS } from '@/api/queryKeys';
import { GroupMember } from '@/pages/QSpace/types/group';
import { groupAPI } from '@/pages/QSpace/api/groupAPI';

export const useMemberList = (groupId: number) => {
  return useQuery<GroupMember[]>({
    queryKey: [GROUP_KEYS.ROOT, groupId, 'members'],
    queryFn: async () => {
      const response = await groupAPI.getGroupMembers(groupId);
      if (!response.success || !response.data) {
        throw new Error(response.error?.message || '멤버 목록을 불러오는데 실패했습니다');
      }
      return response.data;
    },
  });
};
