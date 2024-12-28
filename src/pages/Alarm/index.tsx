/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoChevronBack } from 'react-icons/io5';
import NotificationItemComponent from '@/pages/Alarm/AlarmItem';
import {
  containerStyle,
  headerStyle,
  headerTitleStyle,
  readWrap,
  unreadCountStyle,
  markAllAsReadStyle,
  listStyle,
} from '@/pages/Alarm/styles';
import { NotificationItem } from '@/pages/Alarm/type/alarmType';
import { fetchNotifications, markAllNotificationsAsRead } from '@/pages/Alarm/api/fetchAlarm';

const NotificationPage = () => {
  const navigate = useNavigate();

  // 알림 데이터 상태
  const [notifications, setNotifications] = useState<NotificationItem[]>([]);
  const [readItems, setReadItems] = useState<number[]>([]); // 읽음 처리된 알림 ID 저장

  // 알림 데이터 불러오기
  useEffect(() => {
    const loadNotifications = async () => {
      try {
        const data = await fetchNotifications();
        setNotifications(data);
        const readIds = data
          .filter((notification) => notification.isRead)
          .map((n) => n.notificationId);
        setReadItems(readIds); // 이미 읽음 처리된 알림 ID를 상태에 저장
      } catch (error) {
        console.error('알림 데이터를 불러오는 중 오류가 발생했습니다:', error);
      }
    };

    loadNotifications();
  }, []);

  // 특정 알림 읽음 처리
  const handleItemRead = (id: number) => {
    setReadItems((prev) => [...prev, id]);
  };

  // 모든 알림 읽음 처리
  const handleMarkAllAsRead = async () => {
    try {
      await markAllNotificationsAsRead(); // API 호출
      setReadItems(notifications.map((notification) => notification.notificationId)); // 모든 알림을 읽음 처리 상태로 변경
    } catch (error) {
      console.error('모든 알림 읽음 처리 중 오류가 발생했습니다:', error);
    }
  };

  return (
    <div css={containerStyle}>
      {/* Header */}
      <div css={headerStyle}>
        <IoChevronBack onClick={() => navigate(-1)} />
        <span css={headerTitleStyle}>알림</span>
      </div>

      {/* Unread count */}
      <div css={readWrap}>
        <div css={unreadCountStyle}>안읽은 알림 {notifications.length - readItems.length}개</div>
        <span css={markAllAsReadStyle} onClick={handleMarkAllAsRead}>
          모두 읽음 표시
        </span>
      </div>

      {/* Notification List */}
      <div css={listStyle}>
        {notifications.map((notification) => (
          <NotificationItemComponent
            key={notification.notificationId}
            notification={notification}
            isRead={readItems.includes(notification.notificationId)}
            onRead={handleItemRead}
          />
        ))}
      </div>
    </div>
  );
};

export default NotificationPage;
