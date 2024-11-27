import styled from '@emotion/styled';
import { CiUser } from 'react-icons/ci';
import theme from '@/styles/theme';

interface QSpaceCardProps {
  imageUrl: string; // 이미지 URL
  title: string; // 제목
  description: string; // 소개글
  memberCount: number; // 멤버 수
  isRecruiting: boolean; // 모집 상태
  lastUpdated: string; // 마지막 업데이트 시간
}

export const QSpaceCard = ({
  imageUrl,
  title,
  description,
  memberCount,
  isRecruiting,
  lastUpdated,
}: QSpaceCardProps) => {
  return (
    <Container>
      <Content>
        <ImageContainer>
          <Image src={imageUrl} alt={title} />
        </ImageContainer>
        <TextContainer>
          <RecruitingStatus isRecruiting={isRecruiting}>{isRecruiting ? '모집중' : '모집 완료'}</RecruitingStatus>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </TextContainer>
      </Content>
      <Divider />
      <Footer>
        <Members>
          <CiUser size='1rem' />
          <MemberCount>{memberCount}</MemberCount>
        </Members>
        <LastUpdated>{lastUpdated}</LastUpdated>
      </Footer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border: none;
  border-radius: 0.5rem;
  background-color: ${theme.colors.white};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  gap: 0.5rem;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ImageContainer = styled.div`
  flex: 0 0 6.25rem;
  height: 6.25rem;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.5rem;
`;

const TextContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const RecruitingStatus = styled.span<{ isRecruiting: boolean }>`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 1.875rem;
  font-size: 0.75rem;
  font-weight: bold;
  color: ${({ isRecruiting }) => (isRecruiting ? theme.colors.textYellow : theme.colors.gray[300])};
  background-color: ${({ isRecruiting }) => (isRecruiting ? theme.colors.yellow : theme.colors.gray[100])};
  width: fit-content;
`;

const Title = styled.h2`
  font-size: 1rem;
  font-weight: bold;
  margin: 0;
  color: ${theme.colors.black};
`;

const Description = styled.p`
  font-size: 0.875rem;
  margin: 0;
  color: ${theme.colors.gray[300]};
`;

const Divider = styled.hr`
  border: none;
  border-top: 0.25px solid ${theme.colors.gray[200]};
  margin: 0.5rem 0;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.875rem;
`;

const Members = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  color: ${theme.colors.gray[300]};
`;

const MemberCount = styled.span`
  font-size: 0.875rem;
`;

const LastUpdated = styled.span`
  font-size: 0.875rem;
  color: ${theme.colors.blue};
`;
