/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProfileImage from '@/components/ui/ProfileImageCon/ProfileImageCon';
import { NotificationItem } from '@/pages/Alarm/type/alarmType';
import {
  listCon,
  listConRead,
  notificationContentStyle,
  notificationMessageStyle,
  notificationTypeStyle,
  timeStyle,
  followButtonStyle,
} from '@/pages/Alarm/styles';
import { markNotificationAsRead } from '@/pages/Alarm/api/fetchAlarm';

interface NotificationItemProps {
  notification: NotificationItem; // 알림 데이터 타입
  isRead: boolean; // 읽음 여부
  onRead: (id: number) => void; // 읽음 처리 콜백 함수
}

const NotificationItemComponent: React.FC<NotificationItemProps> = ({
  notification,
  isRead,
  onRead,
}) => {
  const navigate = useNavigate();
  const [isFollowing, setIsFollowing] = useState(false); // 팔로우 상태 관리

  const handleFollow = () => {
    if (isFollowing) {
      console.log(`${notification.sender}를 팔로우 취소 요청`);
      // TODO: 팔로우 취소 API 호출
      setIsFollowing(false); // 상태 변경
    } else {
      console.log(`${notification.sender}를 맞팔로우 요청`);
      // TODO: 맞팔로우 API 호출
      setIsFollowing(true); // 상태 변경
    }
  };

  const handleClick = async () => {
    if (!isRead) {
      await markNotificationAsRead(notification.notificationId); // 읽음 처리
      onRead(notification.notificationId); // 부모 컴포넌트에 읽음 처리 콜백 전달
    }

    // URL이 있는 경우 해당 페이지로 이동
    if (notification.url) {
      navigate(notification.url);

    } else {
      console.error('알림에 URL이 없습니다:', notification.content);

    }
  };

  return (
    <div
      css={[listCon, isRead && listConRead]} // 읽음 여부에 따라 스타일 변경
      onClick={handleClick}
    >
      <ProfileImage src="" size={40} />
      <div css={notificationContentStyle}>
        <span css={notificationTypeStyle}>{notification.type}</span>
        <p css={notificationMessageStyle}>{notification.content}</p>
        {notification.type === 'FOLLOW' && (
          <button
            css={followButtonStyle}
            onClick={(e) => {
              e.stopPropagation(); // 부모 클릭 이벤트 차단
              handleFollow(); // 팔로우/취소 처리
            }}
          >
            {isFollowing ? '팔로잉' : '맞팔로우'}
          </button>
        )}
      </div>
      <span css={timeStyle}>{notification.time}</span>
    </div>
  );
};

export default NotificationItemComponent;
