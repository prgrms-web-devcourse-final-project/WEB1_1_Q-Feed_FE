/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoChevronBack } from 'react-icons/io5';
import ProfileImage from '@/components/ui/ProfileImageCon/ProfileImageCon';
import {
  backIconStyle,
  containerStyle,
  headerStyle,
  headerTitleStyle,
  listCon,
  listConRead,
  listStyle,
  markAllAsReadStyle,
  notificationContentStyle,
  notificationMessageStyle,
  notificationTypeStyle,
  readWrap,
  timeStyle,
  unreadCountStyle,
} from '@/pages/Alarm/styles';
import { NotificationItem } from '@/pages/Alarm/type/alarmType';
import {
  fetchNotifications,
  markNotificationAsRead,
  markAllNotificationsAsRead,
} from '@/pages/Alarm/api/fetchAlarm';

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
        const readIds = data.filter((notification) => notification.isRead).map((n) => n.id);
        setReadItems(readIds); // 이미 읽음 처리된 알림 ID를 상태에 저장
      } catch (error) {
        console.error('알림 데이터를 불러오는 중 오류가 발생했습니다:', error);
      }
    };

    loadNotifications();
  }, []);

  // 알림 클릭 시 읽음 처리 및 URL로 이동
  const handleItemClick = async (notification: NotificationItem) => {
    if (!readItems.includes(notification.id)) {
      // 읽음 처리 API 호출
      await markNotificationAsRead(notification.id);
      setReadItems((prev) => [...prev, notification.id]);
    }

    // URL로 이동
    if (notification.url) {
      navigate(notification.url);
    }
  };

  // 모든 알림 읽음 처리
  const markAllAsRead = async () => {
    try {
      await markAllNotificationsAsRead(); // API 호출
      setReadItems(notifications.map((notification) => notification.id)); // 모든 알림을 읽음 처리 상태로 변경
    } catch (error) {
      console.error('모든 알림 읽음 처리 중 오류가 발생했습니다:', error);
    }
  };

  return (
    <div css={containerStyle}>
      {/* Header */}
      <div css={headerStyle}>
        <IoChevronBack css={backIconStyle} onClick={() => navigate(-1)} />
        <span css={headerTitleStyle}>알림</span>
      </div>

      {/* Unread count */}
      <div css={readWrap}>
        <div css={unreadCountStyle}>
          안읽은 알림 {notifications.length - readItems.length}개
        </div>
        <span css={markAllAsReadStyle} onClick={markAllAsRead}>
          모두 읽음 표시
        </span>
      </div>

      {/* Notification List */}
      <div css={listStyle}>
        {notifications.map((notification) => (
          <div
            key={notification.id}
            css={[
              listCon,
              readItems.includes(notification.id) && listConRead, // 읽음 처리된 항목 스타일
            ]}
            onClick={() => handleItemClick(notification)}
          >
            <ProfileImage src="" size={40} />
            <div css={notificationContentStyle}>
              <span css={notificationTypeStyle}>{notification.type}</span>
              <p css={notificationMessageStyle}>{notification.message}</p>
            </div>
            <span css={timeStyle}>{notification.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationPage;