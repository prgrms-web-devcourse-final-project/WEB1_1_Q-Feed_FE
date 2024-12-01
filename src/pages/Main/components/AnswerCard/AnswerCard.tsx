import {
  Container,
  DateText,
  TextAnswer,
  TextTitle,
} from '@/pages/Main/components/AnswerCard/AnswerCard.styles';

type AnswerCardProps = {
  answer: string;
  date: string;
};

const AnswerCard = ({ answer, date }: AnswerCardProps) => {
  return (
    <Container>
      <DateText>{date}</DateText>
      <TextTitle>나의 답변</TextTitle>
      <TextAnswer>{answer}</TextAnswer>
    </Container>
  );
};

export default AnswerCard;
