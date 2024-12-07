import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ImageUpload } from '@/components/ui/ImageUpload/ImageUpload';
import { categoryIdMap } from '@/utils/categoryIdMap';
import { useQuestions } from '@/pages/Question/hooks/useQuestion';
import { useCreateAnswer } from '@/pages/Question/hooks/useAnswer';
import Header from '@/components/common/Header';
import Answer from '@/pages/Question/components/Answer/Answer';
import LoadingSpinner from '@/components/ui/LoadingSpinner/LoadingSpinner';
import { CreateAnswerRequest, CreateAnswerResponse } from '@/pages/Question/types/answer';
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

  const { data: question, isLoading: loadingQuestion, error: questionError } = useQuestions(categoryIdMap[category as string]);
  const { mutate: createAnswer, error: isCreateAnswerError } = useCreateAnswer();
  const handleImageUpload = (file: File | null) => {
    setUploadedImage(file);
  };

  const handleSubmit = () => {
    console.log(
      `답변: ${answer}\n공개 여부: ${isPrivate ? '비공개' : '공개'}\n이미지: ${uploadedImage ? uploadedImage.name : '없음'}`
    );
    const createAnswerRequest: CreateAnswerRequest = {
      questionId: categoryIdMap[category as string],
      content: answer,
      visibility: isPrivate
    };


    createAnswer(createAnswerRequest,
      {
        onSuccess: (data: CreateAnswerResponse) => {
          console.log('Answer created:', data.message);
          navigate('/');
        },
        onError: (err) => {
          console.error('Error creating answer:', err);
        },
      }
    );
  };

  const renderError = (error: string) => (
    <PageLayout>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <p>{error}</p>
      </div>
    </PageLayout>
  );

  if (loadingQuestion) {
    return (
      <PageLayout>
        <LoadingSpinner />
      </PageLayout>
    );
  }

  if (questionError || isCreateAnswerError) {
    return renderError('error');
  }


  return (
    <PageLayout>
      <Container>
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
      </Container>
    </PageLayout>
  );
};

const PageLayout = ({ children }: { children: React.ReactNode }) => (
  <>
    <Header />
    {children}
  </>
);

export default QuestionPage;
