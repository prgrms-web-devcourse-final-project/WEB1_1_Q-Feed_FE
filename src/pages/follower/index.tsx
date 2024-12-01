/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
} from '@/pages/Follower/styles';

const FollowerFollowingPage = () => {
  const [activeTab, setActiveTab] = useState('follower'); // "follower" or "following"
  const navigate = useNavigate();
  const [followers, setFollowers] = useState([
    { id: 1, name: '백종원', isFollowing: true },
    { id: 2, name: '백종원', isFollowing: false },
    { id: 3, name: '백종원', isFollowing: false },
    { id: 4, name: '백종원', isFollowing: true },
  ]);

  const [following, setFollowing] = useState([
    { id: 1, name: '백종원', isFollowing: true },
    { id: 2, name: '백종원', isFollowing: true },
    { id: 3, name: '백종원', isFollowing: true },
    { id: 4, name: '백종원', isFollowing: true },
  ]);

  const handleFollowerToggle = (id: number) => {
    setFollowers((prev) =>
      prev.map((follower) =>
        follower.id === id ? { ...follower, isFollowing: !follower.isFollowing } : follower
      )
    );
  };
  const handleFollowingToggle = (id: number) => {
    setFollowing((prev) =>
      prev.map((follow) =>
        follow.id === id ? { ...follow, isFollowing: !follow.isFollowing } : follow
      )
    );
  };

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
          onClick={() => setActiveTab('follower')}
        >
          팔로워
        </button>
        <button
          css={[tabStyle, activeTab === 'following' && activeTabStyle]}
          onClick={() => setActiveTab('following')}
        >
          팔로잉
        </button>
      </div>

      {/* List */}
      <div css={listContainerStyle}>
        {activeTab === 'follower' &&
          followers.map((follower) => (
            <div key={follower.id} css={listItemStyle}>
              <ProfileImageCon src="" size={40} />
              <span css={nameStyle}>{follower.name}</span>
              {follower.isFollowing ? (
                <div css={buttonGroupStyle}>
                  <button css={ButtonStyle}>메시지</button>
                  <button css={ButtonStyle} onClick={() => handleFollowerToggle(follower.id)}>
                    팔로우 취소
                  </button>
                </div>
              ) : (
                <button css={ButtonStyle} onClick={() => handleFollowerToggle(follower.id)}>
                  맞팔로우
                </button>
              )}
            </div>
          ))}

        {activeTab === 'following' &&
          following.map((follow) => (
            <div key={follow.id} css={listItemStyle}>
              <ProfileImageCon src="" size={40} />
              <span css={nameStyle}>{follow.name}</span>
              {follow.isFollowing ? (
                <div css={buttonGroupStyle}>
                  <button css={ButtonStyle}>메시지</button>
                  <button css={ButtonStyle} onClick={() => handleFollowingToggle(follow.id)}>
                    팔로우 취소
                  </button>
                </div>
              ) : (
                <button css={ButtonStyle} onClick={() => handleFollowingToggle(follow.id)}>
                  맞팔로우
                </button>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default FollowerFollowingPage;
