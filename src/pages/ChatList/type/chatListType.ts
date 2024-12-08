export interface ChatData {
  chatRoomId: string; // 채팅방 ID
  otherUserProfile?: string; // 프로필 이미지 URL
  otherUserNickname: string; // 사용자 이름
  lastMessageContent: string; // 마지막 메시지
  lastMessageCreatedAt: string; // 메시지 시간
  unreadMessageCount?: number; // 읽지 않은 메시지 수
}
