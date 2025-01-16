import React, { useEffect, useState } from 'react';
import { ImageUpload } from '@/components/ui/ImageUpload/ImageUpload';
import { categoryIdMap } from '@/utils/categoryIdMap';
import { useQuestions } from '@/pages/Question/hooks/useQuestion';
import Header from '@/components/common/Header';
import Answer from '@/pages/Question/components/Answer/Answer';
import ErrorPage from '@/pages/Error';
import {
  Container,
  ImageUploadContainer,
  Question,
  SubmitButton,
  Title,
  Date,
  TitleContainer,
} from '@/pages/Question/styles';
import { useNavigation } from '@/hooks/useNavigation';
import { getTodayDate } from '@/pages/EditAnswer/util/formatDate';
import { useParams } from 'react-router';
import { QFeedLoadingSpinner } from '@/components/ui/QFeedLoadingSpinner/QFeedLoadingSpinner';
import { usePostDetail } from '@/pages/AnswerDetail/hooks/usePostDetail';
import { useUpdateAnswer } from '@/pages/EditAnswer/hooks/useUpdateAnswer';

const EditPage = () => {
  const { gotoMain } = useNavigation();
  const { id, category } = useParams();
  const [answer, setAnswer] = useState('');
  const [isPrivate, setIsPrivate] = useState(true);
  const [uploadedImage, setUploadedImage] = useState<File | null>(null);

  const numericId = Number(id);
  const { data: postDetail } = usePostDetail(numericId);

  useEffect(() => {
    if (postDetail?.content !== undefined) {
      setAnswer(postDetail.content);
    }
  }, [postDetail]);

  const {
    data: question,
    isLoading: loadingQuestion,
    error: questionError,
  } = useQuestions(categoryIdMap[category || '']);

  const { updateAnswer } = useUpdateAnswer(); // useUpdateAnswer

  const handleImageUpload = (file: File | null) => {
    setUploadedImage(file);
  };

  const handleSubmit = () => {
    if (!id) {
      console.error('id값이 없습니다.');
      return;
    }

    const fImg = uploadedImage ?? undefined;

    updateAnswer(id, {
      content: answer,
      image: fImg,
      visibility: isPrivate,
    });

    gotoMain();
  };

  if (loadingQuestion) {
    return (
      <PageLayout>
        <QFeedLoadingSpinner />
      </PageLayout>
    );
  }

  if (questionError) {
    return (
      <PageLayout>
        <ErrorPage />
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <TitleContainer>
        <Title>오늘의 질문</Title>
        <Date>{getTodayDate()}</Date>
      </TitleContainer>
      <Question>{question?.content}</Question>
      <ImageUploadContainer>
        <ImageUpload onImageUpload={handleImageUpload} />
      </ImageUploadContainer>
      <Answer
        answer={answer}
        setAnswer={setAnswer}
        isPrivate={isPrivate}
        onLockToggle={() => setIsPrivate((prev) => !prev)}
      />
      <SubmitButton onClick={handleSubmit}>수정하기</SubmitButton>
    </PageLayout>
  );
};

const PageLayout = ({ children }: { children: React.ReactNode }) => (
  <>
    <Header />
    <Container>{children}</Container>
  </>
);

export default EditPage;
