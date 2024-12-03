import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { IoLockClosed, IoLockOpen } from 'react-icons/io5';
import Header from '@/pages/MyPage/components/Header/Header';
import ImageUpload from '@/components/ui/ImageUpload/ImageUpload';
import {
  Container,
  Title,
  Question,
  PreviousContainer,
  AnswerContainer,
  AnswerLabel,
  AnswerText,
  InputLabel,
  LabelText,
  LockButton,
  CharacterCount,
  Input,
  SubmitButton,
  ImageUploadContainer,
} from '@/pages/Event/styles';

const EventPage = () => {
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
      <Header title="이벤트" />
      <Container>
        <Title>Special Question</Title>
        <Question>다가오는 크리스마스, 주연님의 크리스마스 계획은?</Question>
        <PreviousContainer>
          <AnswerLabel>작년 크리스마스에는 이렇게 답변했어요</AnswerLabel>
          <AnswerText>집에서 &lt;나홀로 집에&gt; 보기</AnswerText>
        </PreviousContainer>
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

export default EventPage;
