import styled from '@emotion/styled';
import { BiComment } from 'react-icons/bi';

interface ReplyContainerProps {
  replyCount: number;
  onReplyClick: () => void;
  className?: string;
}

const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: none;
  gap: 0.375rem;
  cursor: pointer;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
`;

const ReplyIcon = styled(BiComment)`
  font-size: 1rem;
  color: #666;
`;

const ReplyCount = styled.span`
  font-size: 0.725rem;
  color: #666;
`;

export const ReplyContainer = ({ replyCount, onReplyClick, className }: ReplyContainerProps) => {
  return (
    <Container onClick={onReplyClick} className={className}>
      <ReplyIcon />
      {replyCount > 0 && <ReplyCount>{replyCount}</ReplyCount>}
    </Container>
  );
};
