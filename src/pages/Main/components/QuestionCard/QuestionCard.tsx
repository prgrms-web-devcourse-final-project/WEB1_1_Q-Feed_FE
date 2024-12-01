import {
  Container,
  TextDate,
  TextQuestion,
} from '@/pages/Main/components/QuestionCard/QuestionCard.styles';

type QuestionCardProps = {
  date: string;
  question: string;
};

export const QuestionCard = ({ date, question }: QuestionCardProps) => {
  return (
    <Container>
      <TextDate>{date}</TextDate>
      <TextQuestion>{question}</TextQuestion>
    </Container>
  );
};
