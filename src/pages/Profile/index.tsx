import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import theme from '@/styles/theme';
import Header from '@/pages/MyPage/components/Header/Header';
import ProfileImage from '@/components/ui/ProfileImageCon/ProfileImageCon';
import Button from '@/pages/Profile/components/Button';
import Tags from '@/pages/MyPage/components/Tags/Tags';
import { QuestionList } from '@/pages/MyPage/styles';
import QuestionCard from '@/pages/MyPage/components/QuestionCard/QuestionCard';
import LoadingSpinner from '@/components/ui/LoadingSpinner/LoadingSpinner';
import { IoChatbubbleEllipsesOutline } from 'react-icons/io5';
import { FaShare } from 'react-icons/fa6';
import { useUserProfile, useUserInterests } from '@/pages/MyPage/hooks/useUserProfile';
import { useInfiniteAnswers } from '@/pages/MyPage/hooks/useAnswers';
import { interestsMap } from '@/pages/MyPage/utils/interestsMap';
import { copyToClipboard } from '@/pages/MyPage/utils/clipboard';
import { formatDate } from '@/pages/MyPage/utils/date';
import { useAnswersCount } from '@/pages/MyPage/hooks/useAnswersCount';
import { useFollowStatus } from '@/pages/Profile/hooks/useFollowStatus';
import { useFollowActions } from '@/pages/Profile/hooks/useFollowActions';
import { useUserStore } from '@/store/userStore';
import {
  AnswerCounter,
  AnswerSection,
  BioLabel,
  BioSection,
  BioText,
  ButtonGroup,
  Container,
  FollowInfo,
  Id,
  InfoItem,
  Name,
  NameSection,
  ProfileImageWrapper,
  ProfileSection,
  Title,
  TitleSection,
} from '@/pages/Profile/styles';

const ProfilePage = () => {
  const navigate = useNavigate();
  const { id: followeeId } = useParams<{ id: string }>();

  const { userId: followerId } = useUserStore();// 현재 로그인된 사용자 ID

  const { data: followStatus } = useFollowStatus(followerId || '', followeeId as string);
  const { follow, unfollow } = useFollowActions(followerId || '', followeeId as string);

  const { data: profileData, isLoading: profileLoading, error: profileError } = useUserProfile(followeeId || '');
  const { data: interestsData, isLoading: interestsLoading, error: interestsError } = useUserInterests(followeeId || '');
  const {
    data: answerData,
    fetchNextPage,
    hasNextPage,
    isLoading: answersLoading,
    error: answersError,
  } = useInfiniteAnswers(followeeId || '', 10);

  const { data: answerCount } = useAnswersCount(followeeId || '');
  const [tags, setTags] = useState<string[]>([]);

  useEffect(() => {
    if (interestsData) {
      setTags(interestsData.map((interest) => interestsMap[interest]));
    }
  }, [interestsData]);

  const handleCopyProfileLink = () => {
    const profileLink = `${window.location.origin}/profile/${followeeId}`;
    copyToClipboard(profileLink);
  };

  const handleFollowClick = () => {
    if (followStatus?.isFollowing) {
      unfollow.mutate();
    } else {
      follow.mutate();
    }
  };

  if (!followerId) {
    navigate('/login');
  }
  const isSelfProfile = followerId === followeeId; // 자기 자신인지 확인


  if (profileError || interestsError || answersError) {
    return <p>프로필 정보를 불러오는 중 문제가 발생했습니다.</p>;
  }

  if (profileLoading || interestsLoading || answersLoading) {
    return <p>로딩 중...</p>;
  }

  const { nickname: name, email: id, followerCount: followers, followingCount: following, description: bio, profileImageUrl } = profileData || {};



  return (
    <>
      <Header title="프로필" />
      <Container>
        <ProfileSection>
          <NameSection>
            <Name>{name}</Name>
            <Id>({id})</Id>
          </NameSection>
          <ProfileImageWrapper>
            <ProfileImage src={profileImageUrl || '/default-image.jpg'} size={200} alt={`${name}의 프로필 이미지`} />
          </ProfileImageWrapper>
          <Tags tags={tags} />
          <FollowInfo>
            <InfoItem onClick={() => navigate(`/followers/${followeeId}?tab=follower`)}>{followers} followers</InfoItem>
            <InfoItem onClick={() => navigate(`/followers/${followeeId}?tab=following`)}>{following} following</InfoItem>
          </FollowInfo>
          <ButtonGroup>
            <Button
              onClick={!isSelfProfile ? handleFollowClick : () => navigate('/login')} //
              backgroundColor={theme.colors.primary}
              textColor={theme.colors.white}
            >
              {isSelfProfile
                ? 'Me'
                : followStatus?.isFollowing
                  ? 'Unfollow'
                  : 'Follow'}
            </Button>
            <Button
              onClick={() => alert('Chat clicked!')}
              backgroundColor={theme.colors.white}
              textColor={theme.colors.primary}
            >
              <IoChatbubbleEllipsesOutline />
            </Button>
            <Button
              onClick={handleCopyProfileLink}
              backgroundColor={theme.colors.sub}
              textColor={theme.colors.primary}
            >
              <FaShare />
            </Button>
          </ButtonGroup>
        </ProfileSection>
        <BioSection>
          <BioLabel>한 줄 소개</BioLabel>
          <BioText>{bio}</BioText>
        </BioSection>
        <AnswerSection>
          <TitleSection>
            <Title>나의 답변</Title>
            <AnswerCounter>({answerCount?.answerCount || 0})</AnswerCounter>
          </TitleSection>
          <QuestionList>
            {answersLoading && <LoadingSpinner />}
            {answersError && <p>Error loading answers</p>}
            {answerData?.pages.map((page) =>
              page.answers.map((answer) => (
                <QuestionCard
                  key={answer.answerId}
                  date={formatDate(answer.createdAt)}
                  content={answer.answerContent}
                  isPrivate={!answer.visibility}
                  onClick={() => alert(`답변 상세 페이지 이동 id(${answer.answerId})`)}
                />
              ))
            )}
            {hasNextPage && (
              <button onClick={() => fetchNextPage()}>더보기</button>
            )}
          </QuestionList>
        </AnswerSection>
      </Container>
    </>
  );
};

export default ProfilePage;
