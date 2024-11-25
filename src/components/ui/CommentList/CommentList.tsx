import styled from '@emotion/styled';
import { Avatar } from '@chakra-ui/react';
import LikeButtonContainer from '@/components/ui/LikeButtonContainer/LikeButtonContainer';
import { ReplyContainer } from '@/components/ui/ReplyContainer/ReplyContainer';

interface Comment {
  id: string;
  author: {
    name: string;
    profileImage?: string;
  };
  content: string;
  createdAt: string;
  likes: number;
  isLiked: boolean;
  replyCount: number;
}

interface CommentListProps {
  comments: Comment[];
  onLikeComment?: (commentId: string, isLiked: boolean, count: number) => void;
  onReplyClick?: (commentId: string) => void;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const CommentItem = styled.div`
  display: flex;
  gap: 1rem;
`;

const StyledAvatar = styled(Avatar)`
  width: 3rem !important;
  height: 3rem !important;
  border-radius: 100% !important;

  & > img {
    border-radius: 100% !important;
  }
`;

const CommentContent = styled.div`
  flex: 1;
`;

const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.25rem;
`;

const AuthorName = styled.span`
  font-weight: 600;
  color: #111111;
  font-size: 0.875rem;
`;

const CreatedAt = styled.span`
  color: #dddddd;
  font-size: 0.75rem;
`;

const Content = styled.p`
  color: #111111;
  font-size: 0.875rem;
  margin: 0.25rem 0 0.5rem 0;
  line-height: 1.5;
`;

const ActionButtons = styled.div`
  display: flex;
  margin-top: 0.5rem;
`;

export const CommentList = ({ comments, onLikeComment, onReplyClick }: CommentListProps) => {
  const formatTime = (dateString: string) => {
    const now = new Date();
    const commentDate = new Date(dateString);
    const diffInHours = Math.floor((now.getTime() - commentDate.getTime()) / (1000 * 60 * 60));

    if (diffInHours < 1) {
      const diffInMinutes = Math.floor((now.getTime() - commentDate.getTime()) / (1000 * 60));
      return `${diffInMinutes}분 전`;
    }
    if (diffInHours < 24) {
      return `${diffInHours}시간 전`;
    }
    const diffInDays = Math.floor(diffInHours / 24);
    return `${diffInDays}일 전`;
  };

  return (
    <Container>
      {comments.map((comment) => (
        <CommentItem key={comment.id}>
          <StyledAvatar src={comment.author.profileImage} name={comment.author.name} size='sm' />
          <CommentContent>
            <AuthorInfo>
              <AuthorName>{comment.author.name}</AuthorName>
              <CreatedAt>{formatTime(comment.createdAt)}</CreatedAt>
            </AuthorInfo>
            <Content>{comment.content}</Content>
            <ActionButtons>
              <LikeButtonContainer
                size='small'
                initialCount={comment.likes}
                initialLiked={comment.isLiked}
                onLikeChange={(isLiked, count) => onLikeComment?.(comment.id, isLiked, count)}
              />
              <ReplyContainer replyCount={comment.replyCount} onReplyClick={() => onReplyClick?.(comment.id)} />
            </ActionButtons>
          </CommentContent>
        </CommentItem>
      ))}
    </Container>
  );
};
