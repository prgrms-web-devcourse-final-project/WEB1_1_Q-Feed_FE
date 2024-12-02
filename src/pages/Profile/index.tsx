import { useNavigate } from 'react-router-dom';
import theme from '@/styles/theme';
import Header from '@/pages/MyPage/components/Header/Header';
import ProfileImage from '@/components/ui/ProfileImageCon/ProfileImageCon';
import Button from '@/pages/Profile/components/Button';
import PopularPostSlider from '@/pages/Main/components/PopularPostSlider/PopularPostSlider';
import Tags from '@/pages/MyPage/components/Tags/Tags';
import { IoChatbubbleEllipsesOutline } from 'react-icons/io5';
import { FaShare } from 'react-icons/fa6';
import { dummyProfile } from '@/mocks/dunmyMyProfile';
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
  const { name, id, followers, following, bio, profileImage, answers, tags } = dummyProfile;
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
            <ProfileImage src={profileImage} size={200} alt={`${name}의 프로필 이미지`} />
          </ProfileImageWrapper>
          <Tags tags={tags} />
          <FollowInfo>
            <InfoItem onClick={() => navigate('/followers?tab=follower')}>{following} following</InfoItem>
            <InfoItem onClick={() => navigate('/followers?tab=following')}>{followers} followers</InfoItem>
          </FollowInfo>
          <ButtonGroup>
            <Button
              onClick={() => alert('클릭!')}
              backgroundColor={theme.colors.primary}
              textColor={theme.colors.white}
            >
              Follow
            </Button>
            <Button
              onClick={() => alert('클릭!')}
              backgroundColor={theme.colors.white}
              textColor={theme.colors.primary}
            >
              <IoChatbubbleEllipsesOutline />
            </Button>
            <Button
              onClick={() => alert('클릭!')}
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
            <AnswerCounter>({answers.length})</AnswerCounter>
          </TitleSection>
          <PopularPostSlider popularPosts={answers} />
        </AnswerSection>
      </Container>
    </>
  );
};

export default ProfilePage;
