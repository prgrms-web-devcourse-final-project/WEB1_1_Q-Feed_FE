import theme from '@/styles/theme';
import ProfileImage from '@/components/ui/ProfileImageCon/ProfileImageCon';
import {
  Container,
  Description,
  Name,
  ProfileWrapper,
  StyledButton,
  StyledCloseButton,
} from '@/pages/Main/components/ProfileCard/ProfileCard.styles';

type ProfileCardProps = {
  name: string;
  imgsrc?: string;
  followerName: string;
  followerNum: number;
  onClickClose?: () => void;
  onClickFollow?: () => void;
};

export const ProfileCard = ({
  name,
  imgsrc,
  followerName,
  followerNum,
  onClickClose,
  onClickFollow,
}: ProfileCardProps) => {
  return (
    <Container>
      <StyledCloseButton onClick={onClickClose} colorScheme={theme.colors.primary} />
      <ProfileWrapper>
        <ProfileImage size={74} src={imgsrc} />
        <Name>{name}</Name>
        <Description>
          {followerName}님 외 {followerNum}명이 팔로우 합니다
        </Description>
        <StyledButton onClick={onClickFollow}>Follow</StyledButton>
      </ProfileWrapper>
    </Container>
  );
};
