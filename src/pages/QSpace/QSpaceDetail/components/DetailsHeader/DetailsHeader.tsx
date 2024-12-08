import theme from '@/styles/theme';
import ProfileImage from '@/components/ui/ProfileImageCon/ProfileImageCon';
import { Container, CreatorInfo, TextContent, Title } from './DetailsHead.styles';

interface DetailsHeaderProps {
  groupName: string;
  adminNickname: string;
  adminProfile?: string;
}

const DetailsHeader = ({ groupName, adminNickname, adminProfile }: DetailsHeaderProps) => {
  return (
    <Container>
      <ProfileImage
        src={adminProfile}
        size={40}
        bgColor={theme.colors.gray[200]}
        alt="관리자 프로필 이미지"
      />
      <TextContent>
        <Title>{groupName}</Title>
        <CreatorInfo>{adminNickname}</CreatorInfo>
      </TextContent>
    </Container>
  );
};

export default DetailsHeader;
