import { useNavigate } from 'react-router-dom';
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
  imageUrl: string;
  title: string;
  description: string;
  memberCount: number;
  isRecruiting: boolean;
  lastUpdated: string;
  id?: string; // 카드의 고유 ID 추가 (선택적)
}

const QSpaceCard = ({
  imageUrl,
  title,
  description,
  memberCount,
  isRecruiting,
  lastUpdated,
  id,
}: QSpaceCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    // id가 있으면 해당 id를 포함한 경로로, 없으면 기본 경로로 이동
    navigate(id ? `/qspace/details/${id}` : '/qspace/details');
  };

  return (
    <Container onClick={handleClick}>
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
