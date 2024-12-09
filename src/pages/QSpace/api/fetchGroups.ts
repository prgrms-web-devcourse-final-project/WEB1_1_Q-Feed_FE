import { groupAPI } from '@/pages/QSpace/api/groupAPI';
import { Group } from '@/pages/QSpace/types/group';

export const fetchGroups = async (categoryId: number): Promise<Group[]> => {
  const response = await groupAPI.getGroupsByCategory(categoryId);

  if (!response.success || !response.data) {
    throw new Error(response.error?.message || 'Failed to fetch groups');
  }

  return response.data;
};
