import BackButton from '@/components/ui/BackButton/BackButton';
import { QuestionCard } from '@/pages/Main/components/QuestionCard/QuestionCard';
import { CommentItem } from '@/pages/AnswerDetail/components/CommentItem/CommentItem';
import { MessageBox } from '@/pages/AnswerDetail/components/MessageBox/MessageBox';
import { CommentItemList } from '@/pages/AnswerDetail/components/CommentItemList/CommentItemList';
import { useParams } from 'react-router-dom';
import {
  Body,
  CommentHeader,
  CommentListWrapper,
  Container,
  Header,
  MessageBoxWrapper,
  PostWrapper,
  TextComment,
  TextCommentCount,
  Title,
} from '@/pages/AnswerDetail/styles';
import { usePostDetail } from '@/pages/AnswerDetail/hooks/usePostDetail';
import { useFetchQuestion } from '@/pages/AnswerDetail/hooks/useFetchQuestion';
import { HobbyTag } from '@/constants/hobbytag';
import LoadingSpinner from '@/components/ui/LoadingSpinner/LoadingSpinner';
import { formatLastUpdated } from '@/utils/formatLastUpdated';

export const PostDetailPage = () => {
  const { postId, categoryId } = useParams();
  const parsedPostId = Number(postId);
  const parsedCategoryId = Number(categoryId);
  const { data: postDetail, isLoading, isError } = usePostDetail(parsedPostId);
  const { data: todayQuestion } = useFetchQuestion(parsedCategoryId);

  if (!postId || isNaN(parsedPostId)) {
    return <div>유효하지 않은 게시물입니다</div>;
  }

  if (isLoading) <LoadingSpinner />;
  if (isError) alert('Error');

  const handleLikeComment = (commentId: string, isLiked: boolean, count: number) => {
    console.log(commentId, isLiked, count);
    //좋아요 처리
  };

  const handleReplyClick = (commentId: string) => {
    console.log(commentId);
    // 답글 클릭 처리
  };

  const handleMessage = (message: string) => {
    // 댓글 입력 (API 연동 필요)
    const newComment = {
      id: String(Date.now()),
      author: {
        name: '김감자',
        profileImage:
          'https://img.freepik.com/premium-photo/funny-potato-character-isolated-empty-background_168310-123.jpg',
      },
      content: message,
      createdAt: new Date().toISOString(),
      likes: 0,
      isLiked: false,
      replyCount: 0,
    };

    console.log(newComment);

    // setComments((prevComments) => [newComment, ...prevComments]);
  };

  return (
    <Container>
      <Header>
        <BackButton />
        <Title>{HobbyTag[parsedCategoryId - 1]}</Title>
      </Header>
      <Body>
        <QuestionCard
          date={formatLastUpdated(todayQuestion?.createdAt || '2024-12-12')}
          question={todayQuestion?.content || '오늘의 질문은 무엇이야??'}
        />
        <PostWrapper>
          {postDetail && (
            <CommentItem
              commentId={postDetail.answerId}
              profileImage={postDetail.profileImage}
              nickName={postDetail.authorNickname}
              content={postDetail.content}
              createdAt={postDetail.createdAt}
              likeCount={postDetail.likeCount}
              isLike={postDetail.isLike}
              replyCount={postDetail.commentCount}
              comments={postDetail.comments}
              onLikeComment={handleLikeComment}
              onReplyClick={handleReplyClick}
            />
          )}
        </PostWrapper>
        <CommentHeader>
          <TextComment>댓글</TextComment>
          <TextCommentCount>({postDetail?.commentCount})</TextCommentCount>
        </CommentHeader>
        <CommentListWrapper>
          {postDetail?.comments && (
            <CommentItemList
              comments={postDetail?.comments}
              onLikeComment={handleLikeComment}
              onReplyClick={handleReplyClick}
            />
          )}
        </CommentListWrapper>
        <MessageBoxWrapper>
          <MessageBox onSendMessage={handleMessage} />
        </MessageBoxWrapper>
      </Body>
    </Container>
  );
};
export default PostDetailPage;
