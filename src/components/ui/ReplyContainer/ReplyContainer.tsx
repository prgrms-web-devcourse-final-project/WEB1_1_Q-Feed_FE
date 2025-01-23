import {
  Container,
  ReplyCount,
  ReplyIcon,
} from '@/components/ui/ReplyContainer/ReplyContainer.styles';

interface ReplyContainerProps {
  groupCommentCount: number;
  onReplyClick: () => void;
  className?: string;
}

const ReplyContainer = ({ groupCommentCount, onReplyClick, className }: ReplyContainerProps) => {
  return (
    <Container onClick={onReplyClick} className={className}>
      <ReplyIcon />
      <ReplyCount>{groupCommentCount}</ReplyCount>
    </Container>
  );
};

export default ReplyContainer;
