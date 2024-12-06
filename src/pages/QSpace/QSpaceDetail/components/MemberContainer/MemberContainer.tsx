import { IoPerson } from 'react-icons/io5';
import {
  BottomSection,
  Container,
  Count,
  IconContainer,
  IconsWrapper,
  LastChatTime,
  TopSection,
} from '@/pages/QSpace/QSpaceDetail/components/MemberContainer/MemberContainer.styles';
import MemberListButton from '@/pages/QSpace/QSpaceDetail/components/MemberListButton/MemberListButton';
import { formatLastUpdated } from '@/utils/formatLastUpdated';

interface MemberContainerProps {
  memberCount: number;
  lastChatTime?: string; // Optional로 변경하고 string 타입으로 변경
  onMemberListClick?: () => void;
}

const MemberContainer = ({
  memberCount,
  lastChatTime,
  onMemberListClick,
}: MemberContainerProps) => {
  return (
    <Container>
      <TopSection>
        <Count>
          <IoPerson size={16} />
          <span>{memberCount}</span>
        </Count>
        {lastChatTime && <LastChatTime>{formatLastUpdated(lastChatTime)}</LastChatTime>}
      </TopSection>
      <BottomSection>
        <IconsWrapper>
          {Array(Math.min(memberCount, 5))
            .fill(null)
            .map((_, index) => (
              <IconContainer key={index} isStacked={index !== 0}>
                <IoPerson size={20} />
              </IconContainer>
            ))}
        </IconsWrapper>
        <MemberListButton onClick={onMemberListClick} />
      </BottomSection>
    </Container>
  );
};
export default MemberContainer;
