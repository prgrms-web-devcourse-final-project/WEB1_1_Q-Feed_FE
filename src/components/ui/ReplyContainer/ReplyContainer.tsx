import theme from '@/styles/theme';
import styled from '@emotion/styled';
import { BiComment } from 'react-icons/bi';

interface ReplyContainerProps {
  replyCount: number;
  onReplyClick: () => void;
  className?: string;
}

export const ReplyContainer = ({ replyCount, onReplyClick, className }: ReplyContainerProps) => {
  return (
    <Container onClick={onReplyClick} className={className}>
      <ReplyIcon />
      {replyCount > 0 && <ReplyCount>{replyCount}</ReplyCount>}
    </Container>
  );
};

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
  font-size: ${theme.typography.body1.size};
  color: ${theme.colors.gray[400]};
`;

const ReplyCount = styled.span`
  font-size: ${theme.typography.body3.size};
  color: ${theme.colors.gray[400]};
`;
