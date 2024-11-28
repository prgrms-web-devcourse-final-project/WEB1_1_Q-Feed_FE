/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoChevronBack } from 'react-icons/io5';
import ProfileImage from '@/components/ui/ProfileImageCon/ProfileImageCon';
interface NotificationItem {
  id: number;
  type: string;
  message: string;
  time: string;
}

const NotificationPage: React.FC = () => {
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

// 스타일 정의
const containerStyle = css`
  display: flex;
  flex-direction: column;
  height: 773px;
  background-color: #f9f4ef;
`;

const headerStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 10px 15px;
  background-color: #ffffff;
  border-bottom: 1px solid #ccc;
`;
const readWrap = css`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-between;
  padding-right: 12px;
`;

const backIconStyle = css`
  position: absolute;
  left: 15px;
  font-size: 24px;
  cursor: pointer;
`;

const headerTitleStyle = css`
  font-size: 18px;
  font-weight: bold;
`;

const markAllAsReadStyle = css`
  font-size: 14px;
  border-radius: 16px;
  padding: 6px;
  color: #b9a298;
  background-color: #f3ebe1;
  cursor: pointer;
`;

const unreadCountStyle = css`
  padding: 10px 15px;
  font-size: 14px;
  color: #666;
`;

const listStyle = css`
  flex: 1;
  overflow-y: auto;
  background-color: #f9f3ec;
`;

const listCon = css`
  background-color: #f3ebe1;
  padding: 8px;
  height: 80px;
  border-bottom: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

const listConRead = css`
  background-color: #f9f4ef; /* 읽음 처리된 배경 색 */
`;

const notificationContentStyle = css`
  flex: 1;
  margin-left: 8px;
`;

const notificationTypeStyle = css`
  font-size: 12px;
  color: #999;
`;

const notificationMessageStyle = css`
  margin-top: 4px;
  font-size: 14px;
  color: #333;
`;

const timeStyle = css`
  font-size: 12px;
  color: #999;
`;
