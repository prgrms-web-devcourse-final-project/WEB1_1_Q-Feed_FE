import { apiClient } from '@/api/fetch';
import {
  CreateGroupRequest,
  Group,
  GroupMember,
  UpdateGroupRequest,
} from '@/pages/QSpace/types/group';

export const groupAPI = {
  // 카테고리별 그룹 목록 조회
  getGroupsByCategory: (categoryId: number) => apiClient.get<Group[]>(`/groups/${categoryId}`),

  // 특정 그룹 상세 조회
  getGroupDetail: (groupId: number) => apiClient.get<Group>(`/groups/${groupId}/detail`),

  // 새로운 그룹 생성
  createGroup: (data: CreateGroupRequest) => apiClient.post<Group>('/groups/create', data),

  // 그룹 정보 수정
  updateGroup: ({ groupId, ...data }: UpdateGroupRequest) =>
    apiClient.patch<Group>(`/groups/${groupId}`, data),

  // 그룹 삭제
  deleteGroup: (groupId: number) => apiClient.delete<void>(`/groups/${groupId}`),

  // 그룹 멤버 조회
  getGroupMembers: (groupId: number) => apiClient.get<GroupMember[]>(`/groups/${groupId}/members`),

  // 그룹 대화 목록 조회
  getGroupComments: (groupId: number) => apiClient.get<Comment[]>(`/groups/${groupId}/comments`),

  // 그룹 가입
  joinGroup: (groupId: number) => apiClient.post(`/groups/${groupId}/join`),

  // 그룹 탈퇴
  leaveGroup: (groupId: number) => apiClient.delete(`/groups/${groupId}/leave`),

  // 그룹 상태 변경
  updateGroupStatus: (groupId: number, isRecruiting: boolean) =>
    apiClient.patch(`/groups/${groupId}/status`, { isRecruiting }),

  // 대화 추가
  createComment: (groupId: number, content: string) =>
    apiClient.post<Comment>(`/groups/${groupId}/comments`, { content }),

  // 좋아요 기능
  likeComment: (commentId: number) => apiClient.post(`/comments/${commentId}/like`),
} as const;
