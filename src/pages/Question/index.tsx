import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ImageUpload } from '@/components/ui/ImageUpload/ImageUpload';
import { categoryIdMap } from '@/utils/categoryIdMap';
import { useQuestions } from '@/pages/Question/hooks/useQuestion';
import { useCreateAnswer } from '@/pages/Question/hooks/useAnswer';
import { useUserAnswer } from '@/pages/Question/hooks/useAnswer';
import Header from '@/components/common/Header';
import Answer from '@/pages/Question/components/Answer/Answer';
import LoadingSpinner from '@/components/ui/LoadingSpinner/LoadingSpinner';
import ErrorPage from '@/pages/Error';
import { CreateAnswerRequest } from '@/pages/Question/types/answer';
import {
  Container,
  ImageUploadContainer,
  Question,
  SubmitButton,
  Title,
  Date,
  TitleContainer,
} from '@/pages/Question/styles';

const QuestionPage = () => {
  const navigate = useNavigate();
  const { category } = useParams<{ category: string }>();
  const [answer, setAnswer] = useState('');
  const [isPrivate, setIsPrivate] = useState(true);
  const [uploadedImage, setUploadedImage] = useState<File | null>(null);

  const {
    data: question,
    isLoading: loadingQuestion,
    error: questionError,
  } = useQuestions(categoryIdMap[category as string]);

  const questionId = question?.questionId;

  // 사용자가 질문에 답변했는지 확인
  const { data: userAnswer, isLoading: loadingAnswer } = useUserAnswer(
    questionId ? String(questionId) : ''
  );

  useEffect(() => {
    if (userAnswer) {
      navigate('/main');
    }
  }, [userAnswer, navigate]);

  const { mutate: createAnswer, error: isCreateAnswerError } = useCreateAnswer();

  const handleImageUpload = (file: File | null) => {
    setUploadedImage(file);
  };

  const handleSubmit = () => {
    const createAnswerRequest: CreateAnswerRequest = {
      questionId: questionId as number,
      content: answer,
      visibility: isPrivate,
      image: uploadedImage,
    };

    createAnswer(createAnswerRequest, {
      onSuccess: () => {
        navigate('/main');
      },
      onError: (error) => {
        console.error('Error creating answer:', error);
      },
    });
  };

  if (loadingQuestion || loadingAnswer) {
    return <PageLayout><LoadingSpinner /></PageLayout>;
  }

  if (questionError || isCreateAnswerError) {
    return <PageLayout><ErrorPage /></PageLayout>;
  }

  return (
    <PageLayout>
      <TitleContainer>
        <Title>오늘의 질문</Title>
        <Date>D+32</Date>
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
      <SubmitButton onClick={handleSubmit}>등록하기</SubmitButton>
    </PageLayout>
  );
};

const PageLayout = ({ children }: { children: React.ReactNode }) => (
  <>
    <Header />
    <Container>{children}</Container>
  </>
);

export default QuestionPage;
