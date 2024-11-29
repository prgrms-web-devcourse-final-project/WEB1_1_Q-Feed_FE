import styled from '@emotion/styled';
import { Avatar } from '@chakra-ui/react';
import LikeButtonContainer from '@/components/ui/LikeButtonContainer/LikeButtonContainer';
import { ReplyContainer } from '@/components/ui/ReplyContainer/ReplyContainer';
import theme from '@/styles/theme';

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
          <StyledAvatar src={comment.author.profileImage} name={comment.author.name} size="sm" />
          <CommentContent>
            <AuthorInfo>
              <AuthorName>{comment.author.name}</AuthorName>
              <CreatedAt>{formatTime(comment.createdAt)}</CreatedAt>
            </AuthorInfo>
            <Content>{comment.content}</Content>
            <ActionButtons>
              <LikeButtonContainer
                size="small"
                initialCount={comment.likes}
                initialLiked={comment.isLiked}
                onLikeChange={(isLiked, count) => onLikeComment?.(comment.id, isLiked, count)}
              />
              <ReplyContainer
                replyCount={comment.replyCount}
                onReplyClick={() => onReplyClick?.(comment.id)}
              />
            </ActionButtons>
          </CommentContent>
        </CommentItem>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const CommentItem = styled.div`
  display: flex;
  gap: 1rem;
  border-bottom: 1px solid ${theme.colors.gray[300]};
  cursor: pointer;
  &:hover {
    background: ${theme.colors.sub};
  }
  padding: 0.75rem 0;
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
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.25rem;
`;

const AuthorName = styled.span`
  color: ${theme.colors.gray[400]};
  font-weight: ${theme.typography.weights.medium};
  font-size: ${theme.typography.body2.size};
`;

const CreatedAt = styled.span`
  color: ${theme.colors.gray[200]};
  font-size: ${theme.typography.body3.size};
`;

const Content = styled.p`
  color: ${theme.colors.black};
  font-size: ${theme.typography.body2.size};
  font-weight: ${theme.typography.weights.regular};
`;

const ActionButtons = styled.div`
  display: flex;
  margin-top: 0.5rem;
`;
