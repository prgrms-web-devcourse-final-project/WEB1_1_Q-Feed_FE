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

export const markAsRead = async (chatRoomId: string): Promise<void> => {
  try {
    const response = await apiClient.put(`/chats/${chatRoomId}/markasread`);
    if (response.status === 200) {
      console.log('읽음 처리 완료');
    } else {
      console.error('읽음 처리 실패', response);
    }
  } catch (error) {
    console.error('읽음 처리 중 오류 발생:', error);
  }
};
