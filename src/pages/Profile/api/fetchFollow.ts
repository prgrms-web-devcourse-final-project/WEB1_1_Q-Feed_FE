// fetchFollows.ts
import { apiClient } from '@/api/fetch';
import { FollowStatusResponse, FollowListResponse } from '@/pages/Profile/types/follow';
import { ChatData } from '@/pages/ChatList/type/chatListType';
// 팔로우 상태 확인
export const fetchFollowStatus = async (
  followerId: string,
  followeeId: string
): Promise<FollowStatusResponse> => {
  const response = await apiClient.get<FollowStatusResponse>('/follows/check', {
    params: { followerId, followeeId },
  });

  if (!response.data) {
    throw new Error('No data received from API');
  }

  return response.data;
};

// 팔로우 요청
export const followUser = async (followerId: string, followeeId: string): Promise<void> => {
  const response = await apiClient.post('/follows', {
    followerId,
    followeeId,
  });

  if (!response.data) {
    throw new Error('No data received from API');
  }
};

// 언팔로우 요청
export const unfollowUser = async (followerId: string, followeeId: string): Promise<void> => {
  const response = await apiClient.delete('/follows', {
    data: {
      followerId,
      followeeId,
    },
  });

  if (!response.data) {
    throw new Error('No data received from API');
  }
};

// 팔로잉 목록 조회
export const fetchFollowingList = async (
  userId: string,
  cursor?: string,
  size: number = 10
): Promise<FollowListResponse[]> => {
  const response = await apiClient.get<FollowListResponse[]>(`/follows/followings/${userId}`, {
    cursor,
    size,
  });

  if (!response.data) {
    throw new Error('No data received from API');
  }

  return response.data;
};

// 팔로워 목록 조회
export const fetchFollowerList = async (
  userId: string,
  cursor?: string,
  size: number = 10
): Promise<FollowListResponse[]> => {
  const response = await apiClient.get<FollowListResponse[]>(`/follows/followers/${userId}`, {
    cursor,
    size,
  });

  if (!response.data) {
    throw new Error('No data received from API');
  }

  return response.data;
};

export const chatAPI = {
  // 채팅방 목록 가져오기
  getChatList: () => apiClient.get<ChatData[]>('/chats'),

  // 채팅방 생성
  createChatRoom: (userId: string, targetUserId: string) =>
    apiClient.post('/chats', { userId, targetUserId }), // userId와 상대 userId를 이용한 채팅방 생성
};

export const fetchChatList = async (): Promise<ChatData[]> => {
  try {
    const response = await chatAPI.getChatList();
    console.log('응답 데이터: ', response.data); // 응답 확인
    return response.data || [];
  } catch (error) {
    console.error('API 요청 중 오류 발생: ', error); // 에러 확인
    return [];
  }
};

export const createChatRoom = async (
  userId: string,
  userId2: string
): Promise<{ chatRoomId: string }> => {
  try {
    console.log('API 호출 시 전달된 userId:', userId);
    console.log('API 호출 시 전달된 targetUserId:', userId2);

    const response = await apiClient.post<{ chatRoomId: string }>('/chats', {
      userId,
      userId2,
    });

    // response.data.data.chatRoomId를 반환
    return response.data as { chatRoomId: string };
  } catch (error) {
    console.error('채팅방 생성 실패:', error);
    throw error; // 에러를 호출한 쪽으로 전달
  }
};
