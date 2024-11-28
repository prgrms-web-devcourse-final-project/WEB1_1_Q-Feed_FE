import styled from '@emotion/styled';
import theme from '@/styles/theme';

type AnswerCardProps = {
  answer: string;
};

export const AnswerCard = ({ answer }: AnswerCardProps) => {
  return (
    <Container>
      <TextTitle>나의 답변</TextTitle>
      <TextAnswer>{answer}</TextAnswer>
    </Container>
  );
};

const TextTitle = styled.h1`
  width: 100%;
  font-family: 'Noto Sans KR';
  font-size: 16px;
  font-weight: normal;
  color: ${theme.colors.gray[300]};
  text-align: center;
`;
const TextAnswer = styled.h2`
  width: 100%;
  font-family: 'Noto Sans KR';
  font-size: 16px;
  font-weight: normal;
  color: ${theme.colors.gray[600]};
  text-align: center;
  word-wrap: break-word;
  overflow-wrap: break-word;
  white-space: pre-wrap;
  margin-top: 15px;
`;

const Container = styled.div`
  width: 100%;
  min-height: 88px;
  height: auto;
  max-width: 377px;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
  box-shadow: 0 10px 16px 0 rgba(0, 0, 0, 0.2);
  padding: 20px 40px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 20px 0 rgba(0, 0, 0, 0.15);
  }
`;
