import { apiClient } from '@/api/fetch';
import { Group, GroupDetail, GroupMember, GroupPost } from '@/pages/QSpace/types/group';
import { ActionResponse } from '@/types/response';

export const groupAPI = {
  // 카테고리별 그룹 목록 조회
  getGroupsByCategory: (categoryId: number) => apiClient.get<Group[]>(`/groups/${categoryId}`),

  // 특정 그룹 상세 조회 (멤버와 게시글 포함)
  getGroupDetail: (groupId: number) => apiClient.get<GroupDetail>(`/groups/${groupId}/detail`),

  // 새로운 그룹 생성
  createGroup: (formData: FormData) =>
    apiClient.post<ActionResponse<Group>>('/groups/create', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }),

  // 그룹 삭제
  deleteGroup: (groupId: number) => apiClient.delete<void>(`/groups/${groupId}`),

  // 그룹 가입
  joinGroup: (groupId: number) => apiClient.post<ActionResponse>(`/groups/${groupId}/join`),

  // 그룹 수정
  updateGroup: (groupId: number, formData: FormData) =>
    apiClient.patch<ActionResponse<Group>>(`/groups/${groupId}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }),

  // 그룹 탈퇴
  leaveGroup: (groupId: number) => apiClient.delete(`/groups/${groupId}/leave`),

  // 그룹 멤버리스트 조회
  getGroupMembers: (groupId: number) => apiClient.get<GroupMember[]>(`/groups/${groupId}/members`),

  // 게시글 좋아요
  likePost: (postId: number) => apiClient.post(`/posts/${postId}/like`),

  // 게시글 작성
  createPost: (groupId: number, content: string) =>
    apiClient.post<GroupPost>(`/groups/${groupId}/posts`, { content }),

  // 그룹 상태 변경
  updateGroupStatus: (groupId: number) =>
    apiClient.patch<ActionResponse>(`/groups/${groupId}/status`),
} as const;
