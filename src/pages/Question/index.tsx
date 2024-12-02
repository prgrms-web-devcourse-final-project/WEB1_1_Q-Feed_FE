import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoLockClosed, IoLockOpen } from 'react-icons/io5';
import { ImageUpload } from '@/components/ui/ImageUpload/ImageUpload';
import Header from '@/components/common/Header';
import {
  AnswerContainer,
  CharacterCount,
  Container,
  ImageUploadContainer,
  Input,
  InputLabel,
  LabelText,
  LockButton,
  Question,
  SubmitButton,
  Title,
  Date,
  TitleContainer,
} from '@/pages/Question/styles';

const QuestionPage = () => {
  const navigate = useNavigate();
  const [answer, setAnswer] = useState('');
  const [isPrivate, setIsPrivate] = useState(true);
  const [uploadedImage, setUploadedImage] = useState<File | null>(null);

  const handleImageUpload = (file: File | null) => {
    setUploadedImage(file);
  };

  const handleLockToggle = () => {
    setIsPrivate((prev) => !prev);
  };

  const handleSubmit = () => {
    console.log(
      `답변: ${answer}\n공개 여부: ${isPrivate ? '비공개' : '공개'}\n이미지: ${uploadedImage ? uploadedImage.name : '없음'}`
    );
    navigate('/');
  };

  return (
    <>
      <Header />
      <Container>
        <TitleContainer>
          <Title>오늘의 질문</Title>
          <Date>D+32</Date>
        </TitleContainer>
        <Question>맛집을 고르는 기준은 무엇인가요?</Question>
        <ImageUploadContainer>
          <ImageUpload onImageUpload={handleImageUpload} />
        </ImageUploadContainer>
        <AnswerContainer>
          <InputLabel>
            <LabelText>답변을 입력해주세요.</LabelText>
            <LockButton onClick={handleLockToggle} isPrivate={isPrivate}>
              {isPrivate ? <IoLockClosed size="1rem" /> : <IoLockOpen size="1rem" />}
            </LockButton>
          </InputLabel>
          <Input value={answer} onChange={(e) => setAnswer(e.target.value)} maxLength={100} />
        </AnswerContainer>
        <CharacterCount>{`${answer.length}/100`}</CharacterCount>
        <SubmitButton onClick={handleSubmit}>등록하기</SubmitButton>
      </Container>
    </>
  );
};

export default QuestionPage;
