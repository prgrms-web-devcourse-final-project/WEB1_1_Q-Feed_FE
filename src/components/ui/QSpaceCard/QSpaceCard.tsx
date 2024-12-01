import { CiUser } from 'react-icons/ci';
import {
  Container,
  Content,
  Description,
  Divider,
  Footer,
  Image,
  ImageContainer,
  LastUpdated,
  MemberCount,
  Members,
  RecruitingStatus,
  TextContainer,
  Title,
} from '@/components/ui/QSpaceCard/QSpaceCard.styles';

interface QSpaceCardProps {
  imageUrl: string; // 이미지 URL
  title: string; // 제목
  description: string; // 소개글
  memberCount: number; // 멤버 수
  isRecruiting: boolean; // 모집 상태
  lastUpdated: string; // 마지막 업데이트 시간
}

const QSpaceCard = ({
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
          <RecruitingStatus isRecruiting={isRecruiting}>
            {isRecruiting ? '모집중' : '모집 완료'}
          </RecruitingStatus>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </TextContainer>
      </Content>
      <Divider />
      <Footer>
        <Members>
          <CiUser size="1rem" />
          <MemberCount>{memberCount}</MemberCount>
        </Members>
        <LastUpdated>{lastUpdated}</LastUpdated>
      </Footer>
    </Container>
  );
};

export default QSpaceCard;
