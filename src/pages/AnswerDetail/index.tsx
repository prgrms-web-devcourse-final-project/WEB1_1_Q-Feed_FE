import BackButton from '@/components/ui/BackButton/BackButton';
import { QuestionCard } from '@/pages/Main/components/QuestionCard/QuestionCard';
import { CommentItem } from '@/pages/AnswerDetail/components/CommentItem/CommentItem';
import { MessageBox } from '@/pages/AnswerDetail/components/MessageBox/MessageBox';
import { useState } from 'react';
import { CommentItemList } from '@/pages/AnswerDetail/components/CommentItemList/CommentItemList';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
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
import { dummyCommentList } from '@/mocks/dummyCommentList';

const dummyComment = {
  id: '2',
  author: { name: '세계일주', profileImage: 'https://i.pravatar.cc/150?img=2' },
  content: '크리스마스 마켓 좋죠! 뉘른베르크 크리스마스 마켓도 추천합니다~',
  createdAt: '2024-11-28T09:30:00',
  likes: 8,
  isLiked: true,
  replyCount: 27,
};

export const PostDetailPage = () => {
  const [comments, setComments] = useState(dummyCommentList);
  const location = useLocation();
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

    setComments((prevComments) => [newComment, ...prevComments]);
  };

  useEffect(() => {
    setTimeout(() => {
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 0);
  }, [location]);

  return (
    <Container>
      <Header>
        <BackButton />
        <Title>맛집</Title>
      </Header>
      <Body>
        <QuestionCard
          date="2024.11.28"
          question="오늘 당장 해외여행을 떠날수 있다면 어디로 갈건가요?"
        />
        <PostWrapper>
          <CommentItem
            comment={dummyComment}
            onLikeComment={handleLikeComment}
            onReplyClick={handleReplyClick}
          />
        </PostWrapper>
        <CommentHeader>
          <TextComment>댓글</TextComment>
          <TextCommentCount>({comments.length})</TextCommentCount>
        </CommentHeader>
        <CommentListWrapper>
          <CommentItemList
            comments={comments}
            onLikeComment={handleLikeComment}
            onReplyClick={handleReplyClick}
          />
        </CommentListWrapper>
        <MessageBoxWrapper>
          <MessageBox onSendMessage={handleMessage} />
        </MessageBoxWrapper>
      </Body>
    </Container>
  );
};
export default PostDetailPage;
