import {
  Container,
  ReplyCount,
  ReplyIcon,
} from '@/components/ui/ReplyContainer/ReplyContainer.styles';

interface ReplyContainerProps {
  replyCount: number;
  onReplyClick: () => void;
  className?: string;
}

const ReplyContainer = ({ replyCount, onReplyClick, className }: ReplyContainerProps) => {
  return (
    <Container onClick={onReplyClick} className={className}>
      <ReplyIcon />
      {replyCount > 0 && <ReplyCount>{replyCount}</ReplyCount>}
    </Container>
  );
};

export default ReplyContainer;
