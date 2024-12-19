import { useQuery } from '@tanstack/react-query';
import { GROUP_KEYS } from '@/api/queryKeys';
import { groupAPI } from '@/pages/QSpace/api/groupAPI';
import { GroupDetail } from '@/pages/QSpace/types/group';

export const useGroupDetail = (groupId: number) => {
  return useQuery<GroupDetail>({
    queryKey: [GROUP_KEYS.ROOT, groupId],
    queryFn: async () => {
      const response = await groupAPI.getGroupDetail(groupId);
      console.log(response.data?.adminId);

      if (!response.success || !response.data) {
        throw new Error(response.error?.message || '그룹 정보를 불러오는데 실패했습니다');
      }
      return response.data;
    },
  });
};
