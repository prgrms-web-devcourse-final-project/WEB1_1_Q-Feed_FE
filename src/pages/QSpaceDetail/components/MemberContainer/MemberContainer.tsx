import { IoPerson } from 'react-icons/io5';
import {
  BottomSection,
  Container,
  Count,
  IconContainer,
  IconsWrapper,
  LastChatTime,
  TopSection,
} from '@/pages/QSpaceDetail/components/MemberContainer/MemberContainer.styles';
import MemberListButton from '@/pages/QSpaceDetail/components/MemberListButton/MemberListButton';

interface MemberContainerProps {
  memberCount: number;
  lastChatTime: Date;
  maxDisplayCount?: number;
  iconSize?: number;
  onMemberListClick?: () => void;
}

const MemberContainer = ({
  memberCount,
  lastChatTime,
  maxDisplayCount = 5,
  iconSize = 32,
  onMemberListClick,
}: MemberContainerProps) => {
  const displayCount = Math.min(memberCount, maxDisplayCount);
  const icons = Array(displayCount).fill(null);

  const formatTimeAgo = (date: Date): string => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) return `${days}일 전 대화`;
    if (hours > 0) return `${hours}시간 전 대화`;
    if (minutes > 0) return `${minutes}분 전 대화`;
    return '방금 전 대화';
  };

  return (
    <Container>
      <TopSection>
        <Count>
          <IoPerson size={16} />
          <span>{memberCount}</span>
        </Count>
        <LastChatTime>{formatTimeAgo(lastChatTime)}</LastChatTime>
      </TopSection>
      <BottomSection>
        <IconsWrapper>
          {icons.map((_, index) => (
            <IconContainer key={index} size={iconSize} isStacked={index !== 0}>
              <IoPerson size={iconSize * 0.6} />
            </IconContainer>
          ))}
        </IconsWrapper>
        <MemberListButton onClick={onMemberListClick} />
      </BottomSection>
    </Container>
  );
};

export default MemberContainer;
