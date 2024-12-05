import { apiClient } from '@/api/fetch';
import { ChatData } from '@/pages/ChatList/type/chatListType';

export const chatAPI = {
  // 채팅방 목록 가져오기
  getChatList: () => apiClient.get<ChatData[]>('/chats'),
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
