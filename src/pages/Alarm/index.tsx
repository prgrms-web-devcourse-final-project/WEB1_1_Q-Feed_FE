/** @jsxImportSource @emotion/react */
import { useState } from 'react';
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
interface NotificationItem {
  id: number;
  type: string;
  message: string;
  time: string;
}

const NotificationPage = () => {
  const navigate = useNavigate();
  const notifications: NotificationItem[] = [
    {
      id: 1,
      type: '알림 유형(큐스페이스, 이벤트 등)',
      message: "큐피드님이 나의 글에 '댓글'을 남겼습니다.",
      time: '방금',
    },
    {
      id: 2,
      type: '알림 유형(큐스페이스, 이벤트 등)',
      message: "큐피드님이 나의 글에 '댓글'을 남겼습니다.",
      time: '1시간 전',
    },
    {
      id: 3,
      type: '알림 유형(큐스페이스, 이벤트 등)',
      message: "큐피드님이 나의 글에 '댓글'을 남겼습니다.",
      time: '1시간 전',
    },
    {
      id: 4,
      type: '알림 유형(큐스페이스, 이벤트 등)',
      message: "큐피드님이 나의 글에 '댓글'을 남겼습니다.",
      time: '방금',
    },
    {
      id: 5,
      type: '알림 유형(큐스페이스, 이벤트 등)',
      message: "큐피드님이 나의 글에 '댓글'을 남겼습니다.",
      time: '1시간 전',
    },
    {
      id: 6,
      type: '알림 유형(큐스페이스, 이벤트 등)',
      message: "큐피드님이 나의 글에 '댓글'을 남겼습니다.",
      time: '1시간 전',
    },
  ];

  const [readItems, setReadItems] = useState<number[]>([]); // 읽음 처리된 알림 ID 저장

  const handleItemClick = (id: number) => {
    setReadItems((prev) => (prev.includes(id) ? prev : [...prev, id]));
  };

  const markAllAsRead = () => {
    setReadItems(notifications.map((notification) => notification.id));
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
        <div css={unreadCountStyle}>안읽은 알림 {notifications.length - readItems.length}개</div>
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
            onClick={() => handleItemClick(notification.id)}
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
