export interface MessageType {
  messageId: number;
  content: string;
  createdAt: string;
  isRead: boolean;
  type: 'TEXT' | 'IMAGE';
  url: string | null;
  userId: string;
  userNickName: string;
  userProfileImage: string;
  isMine: boolean;
  senderId: string;
}
