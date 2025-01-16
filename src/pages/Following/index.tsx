/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { IoChevronBack } from 'react-icons/io5';
import ProfileImageCon from '@/components/ui/ProfileImageCon/ProfileImageCon';
import {
  activeTabStyle,
  backIconStyle,
  buttonGroupStyle,
  ButtonStyle,
  containerStyle,
  headerStyle,
  listContainerStyle,
  listItemStyle,
  nameStyle,
  tabContainerStyle,
  tabStyle,
} from '@/pages/Following/styles';
import { useFollowerList, useFollowingList, useFollowActions } from '@/pages/Profile/hooks/useFollowList';
import { useUserStore } from '@/store/userStore';

const FollowerFollowingPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const initialTab = searchParams.get('tab') || 'follower';
  const [activeTab, setActiveTab] = useState<'follower' | 'following'>(initialTab as 'follower');

  const { userId: followerId } = useUserStore();

  // React Query hooks for list data
  const { data: followers, isLoading: followersLoading } = useFollowerList({
    userId: followerId || '',
    size: 10,
  });

  const { data: following, isLoading: followingLoading } = useFollowingList({
    userId: followerId || '',
    size: 10,
  });

  const { follow, unfollow } = useFollowActions(followerId || '');

  const handleFollowToggle = (followeeId: string, isFollowing: boolean) => {
    if (isFollowing) {
      unfollow.mutate(followeeId);
    } else {
      follow.mutate(followeeId);
    }
  };

  const handleTabChange = (tab: 'follower' | 'following') => {
    setActiveTab(tab);
    navigate(`/followers?tab=${tab}`);
  };

  const isLoading = activeTab === 'follower' ? followersLoading : followingLoading;

  return (
    <div css={containerStyle}>
      {/* Header */}
      <div css={headerStyle}>
        <IoChevronBack css={backIconStyle} onClick={() => navigate(-1)} />
      </div>

      {/* Tabs */}
      <div css={tabContainerStyle}>
        <button
          css={[tabStyle, activeTab === 'follower' && activeTabStyle]}
          onClick={() => handleTabChange('follower')}
        >
          팔로워
        </button>
        <button
          css={[tabStyle, activeTab === 'following' && activeTabStyle]}
          onClick={() => handleTabChange('following')}
        >
          팔로잉
        </button>
      </div>

      {/* List */}
      <div css={listContainerStyle}>
        {isLoading && <p>Loading...</p>}
        {!isLoading &&
          activeTab === 'follower' &&
          followers?.map((follower) => (
            <div key={follower.userId} css={listItemStyle}>
              <ProfileImageCon src={follower.profileImage} size={40} />
              <span css={nameStyle}>{follower.nickname}</span>
              <div css={buttonGroupStyle}>
                <button css={ButtonStyle}>메시지</button>
                <button
                  css={ButtonStyle}
                  onClick={() => handleFollowToggle(follower.userId, false)}
                >
                  맞팔로우
                </button>
              </div>
            </div>
          ))}

        {!isLoading &&
          activeTab === 'following' &&
          following?.map((follow) => (
            <div key={follow.userId} css={listItemStyle}>
              <ProfileImageCon src={follow.profileImage} size={40} />
              <span css={nameStyle}>{follow.nickname}</span>
              <div css={buttonGroupStyle}>
                <button css={ButtonStyle}>메시지</button>
                <button
                  css={ButtonStyle}
                  onClick={() => handleFollowToggle(follow.userId, true)}
                >
                  팔로우 취소
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default FollowerFollowingPage;
