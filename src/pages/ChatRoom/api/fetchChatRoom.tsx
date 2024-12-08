import { apiClient } from '@/api/fetch';
import { MessageType } from '@/pages/ChatRoom/type/messageType';

export const messageAPI = {
  // 특정 채팅방 메시지 가져오기
  getMessages: (chatRoomId: string) =>
    apiClient.get<MessageType[]>(`/chats/${chatRoomId}/messages`),
};

export const fetchMessages = async (chatRoomId: string): Promise<MessageType[]> => {
  try {
    const response = await messageAPI.getMessages(chatRoomId);
    console.log('응답 데이터: ', response.data); // 응답 확인
    return response.data || []; // 데이터 반환
  } catch (error) {
    console.error('메시지 조회 중 오류 발생: ', error); // 에러 확인
    return [];
  }
};
