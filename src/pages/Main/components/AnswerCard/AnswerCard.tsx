import {
  Container,
  TextAnswer,
  TextTitle,
} from '@/pages/Main/components/AnswerCard/AnswerCard.styles';

type AnswerCardProps = {
  answer: string;
};

const AnswerCard = ({ answer }: AnswerCardProps) => {
  return (
    <Container>
      <TextTitle>나의 답변</TextTitle>
      <TextAnswer>{answer}</TextAnswer>
    </Container>
  );
};

export default AnswerCard;
