export interface NotificationItem {
  notificationId: number; // 알림 ID
  type: string; // 알림 유형 (예: 댓글, 좋아요 등)
  content: string; // 알림 메시지 내용
  sender: string; //알림 보내는 사람
  recipient: string; //알림 받는 사람
  time: string; // 알림 생성 시간
  isRead: boolean; // 알림 읽음 여부
  url?: string;
}
