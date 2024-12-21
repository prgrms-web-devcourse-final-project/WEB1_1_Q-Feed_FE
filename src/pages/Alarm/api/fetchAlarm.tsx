import { apiClient } from '@/api/fetch';
import { NotificationItem } from '@/pages/Alarm/type/alarmType';

export const notificationAPI = {
  // 알림 목록 가져오기
  getNotifications: () => apiClient.get<NotificationItem[]>('/notifications'),

  // 알림 읽음 처리
  markNotificationAsRead: (notificationId: number) =>
    apiClient.put(`/notifications/${notificationId}/read`),

  // 모든 알림 읽음 처리
  markAllNotificationsAsRead: () => apiClient.put('/notifications/read-all'),
};

//알림 호출
export const fetchNotifications = async (): Promise<NotificationItem[]> => {
  try {
    const response = await notificationAPI.getNotifications();
    console.log('알림 데이터: ', response.data); // 응답 데이터 확인
    return response.data || [];
  } catch (error) {
    console.error('알림 조회 중 오류 발생: ', error); // 에러 로그
    return [];
  }
};

//알림 읽음 처리
export const markNotificationAsRead = async (notificationId: number): Promise<void> => {
  try {
    const response = await notificationAPI.markNotificationAsRead(notificationId);
    if (response.status === 200) {
      console.log(`알림 ${notificationId} 읽음 처리 완료`);
    } else {
      console.error(`알림 ${notificationId} 읽음 처리 실패`, response);
    }
  } catch (error) {
    console.error('알림 읽음 처리 중 오류 발생:', error);
  }
};

//알림 모두읽음 처리
export const markAllNotificationsAsRead = async (): Promise<void> => {
  try {
    const response = await notificationAPI.markAllNotificationsAsRead();
    if (response.status === 200) {
      console.log('모든 알림 읽음 처리 완료');
    } else {
      console.error('모든 알림 읽음 처리 실패', response);
    }
  } catch (error) {
    console.error('모든 알림 읽음 처리 중 오류 발생:', error);
  }
};
