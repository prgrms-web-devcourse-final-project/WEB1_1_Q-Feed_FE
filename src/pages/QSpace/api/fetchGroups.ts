import { apiClient } from '@/api/fetch';
import { CreateGroupRequest, Group, UpdateGroupRequest } from '@/pages/QSpace/types/group';

export const groupAPI = {
  // 카테고리별 그룹 목록 조회
  getGroupsByCategory: (categoryId: number) => apiClient.get<Group[]>(`/groups/${categoryId}`),

  // 특정 그룹 상세 조회
  getGroupDetail: (groupId: number) => apiClient.get<Group>(`/groups/${groupId}`),

  // 새로운 그룹 생성
  createGroup: (data: CreateGroupRequest) => apiClient.post<Group>('/groups', data),

  // 그룹 정보 수정
  updateGroup: ({ groupId, ...data }: UpdateGroupRequest) =>
    apiClient.patch<Group>(`/groups/${groupId}`, data),

  // 그룹 삭제
  deleteGroup: (groupId: number) => apiClient.delete<void>(`/groups/${groupId}`),
} as const;

export const fetchGroups = async (categoryId: number): Promise<Group[]> => {
  const response = await groupAPI.getGroupsByCategory(categoryId);
  return response.data || [];
};
