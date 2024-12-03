import axios from 'axios';
import { GroupResponse, Group } from '../types/group';

export const groupsAPI = {
  fetchGroups: async (category: string, showOnlyRecruiting: boolean): Promise<Group[]> => {
    try {
      const endpoint = category === '전체' ? '/groups' : `/groups/${category}`;
      const { data } = await axios.get<GroupResponse>(endpoint);

      // Type Guard를 사용한 응답 데이터 검증
      if (!Array.isArray(data.groups)) {
        console.error('Invalid API response format');
        return [];
      }

      return showOnlyRecruiting ? data.groups.filter((group) => group.is_open) : data.groups;
    } catch (error) {
      console.error('Failed to fetch groups:', error);
      throw error;
    }
  },
};
