import styled from '@emotion/styled';
import theme from '@/styles/theme';
import ProfileImage from '@/components/ui/ProfileImageCon/ProfileImageCon';

interface DetailsHeaderProps {
  title: string;
  creator: string;
  profileImage?: string;
}

const DetailsHeader = ({ title, creator, profileImage }: DetailsHeaderProps) => {
  return (
    <Container>
      <ProfileImage src={profileImage} size={40} bgColor={theme.colors.gray[200]} alt='프로필 이미지' />
      <TextContent>
        <Title>{title}</Title>
        <CreatorInfo>{creator}</CreatorInfo>
      </TextContent>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const Title = styled.h2`
  font-family: ${theme.typography.fontFamily.korean};
  font-size: ${theme.typography.body1.size};
  font-weight: ${theme.typography.weights.semiBold};
  color: ${theme.colors.black};
  margin: 0;
`;

const CreatorInfo = styled.p`
  font-family: ${theme.typography.fontFamily.korean};
  font-size: ${theme.typography.body3.size};
  color: ${theme.colors.gray[400]};
  margin: 0;
`;

export default DetailsHeader;
