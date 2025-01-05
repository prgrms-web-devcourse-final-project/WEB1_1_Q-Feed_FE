import { groupAPI } from '@/pages/QSpace/api/groupAPI';
import { Group } from '@/pages/QSpace/types/group';

export const fetchGroups = async (
  categoryId: number,
  cursor?: string,
  size: number = 10
): Promise<Group[]> => {
  const params = new URLSearchParams();
  if (cursor) params.append('cursor', cursor);
  if (size) params.append('size', size.toString());

  const response = await groupAPI.getGroupsByCategory(categoryId, params.toString());

  if (!response.success || !response.data) {
    throw new Error(response.error?.message || 'Failed to fetch groups');
  }

  return response.data;
};
