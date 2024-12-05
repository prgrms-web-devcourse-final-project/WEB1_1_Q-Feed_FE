import theme from '@/styles/theme';
import ProfileImage from '@/components/ui/ProfileImageCon/ProfileImageCon';
import {
  Container,
  CreatorInfo,
  TextContent,
  Title,
} from '@/pages/QSpace/QSpaceDetail/components/DetailsHeader/DetailsHead.styles';

interface DetailsHeaderProps {
  title: string;
  creator: string;
  profileImage?: string;
}

const DetailsHeader = ({ title, creator, profileImage }: DetailsHeaderProps) => {
  return (
    <Container>
      <ProfileImage
        src={profileImage}
        size={40}
        bgColor={theme.colors.gray[200]}
        alt="프로필 이미지"
      />
      <TextContent>
        <Title>{title}</Title>
        <CreatorInfo>{creator}</CreatorInfo>
      </TextContent>
    </Container>
  );
};

export default DetailsHeader;
