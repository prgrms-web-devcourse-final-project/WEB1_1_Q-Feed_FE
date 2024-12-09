export interface MessageType {
  messageId: number;
  content: string;
  createdAt: string;
  isRead: boolean;
  type: string;
  url: string | null;
  userId: string;
  userNickName: string;
  userProfileImage: string;
  isMine: boolean;
}
