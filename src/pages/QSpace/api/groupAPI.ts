import { apiClient } from '@/api/fetch';
import {
  CreateGroupRequest,
  Group,
  GroupDetail,
  GroupMember,
  GroupPost,
  UpdateGroupRequest,
} from '@/pages/QSpace/types/group';

export const groupAPI = {
  // 카테고리별 그룹 목록 조회
  getGroupsByCategory: (categoryId: number) => apiClient.get<Group[]>(`/groups/${categoryId}`),

  // 특정 그룹 상세 조회 (멤버와 게시글 포함)
  getGroupDetail: (groupId: number) => apiClient.get<GroupDetail>(`/groups/${groupId}/detail`),

  // 새로운 그룹 생성
  createGroup: (data: CreateGroupRequest) => apiClient.post<Group>('/groups/create', data),

  // 그룹 정보 수정
  updateGroup: ({ groupId, ...data }: UpdateGroupRequest) =>
    apiClient.patch<Group>(`/groups/${groupId}`, data),

  // 그룹 삭제
  deleteGroup: (groupId: number) => apiClient.delete<void>(`/groups/${groupId}`),

  // 그룹 가입
  joinGroup: (groupId: number) => apiClient.post(`/groups/${groupId}/join`),

  // 그룹 탈퇴
  leaveGroup: (groupId: number) => apiClient.delete(`/groups/${groupId}/leave`),

  // 그룹 멤버리스트 조회
  getGroupMembers: (groupId: number) => apiClient.get<GroupMember[]>(`/groups/${groupId}/members`),

  // 게시글 좋아요
  likePost: (postId: number) => apiClient.post(`/posts/${postId}/like`),

  // 게시글 작성
  createPost: (groupId: number, content: string) =>
    apiClient.post<GroupPost>(`/groups/${groupId}/posts`, { content }),
} as const;
