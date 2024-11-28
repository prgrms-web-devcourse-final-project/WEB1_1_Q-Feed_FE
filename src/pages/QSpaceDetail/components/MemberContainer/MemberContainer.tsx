import styled from '@emotion/styled';
import { IoPerson } from 'react-icons/io5';
import theme from '@/styles/theme';
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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: 100%;
  gap: 1rem;
  background-color: ${theme.colors.background};
`;

const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BottomSection = styled.div`
  display: flex;
  justify-content: space-between;
`;

const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const IconContainer = styled.div<{ size: number; isStacked: boolean }>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  background-color: ${theme.colors.gray[200]};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: ${(props) => (props.isStacked ? '-8px' : '0')};
  border: 2px solid ${theme.colors.white};
  color: ${theme.colors.gray[100]};
`;

const Count = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: ${theme.colors.gray[400]};
  font-family: ${theme.typography.fontFamily.korean};
  font-size: ${theme.typography.body2.size};

  svg {
    color: ${theme.colors.gray[400]};
  }
`;

const LastChatTime = styled.span`
  color: ${theme.colors.blue};
  font-size: ${theme.typography.body3.size};
  font-family: ${theme.typography.fontFamily.korean};
`;

export default MemberContainer;
