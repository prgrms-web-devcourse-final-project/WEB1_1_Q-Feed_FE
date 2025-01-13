import { useNavigation } from '@/hooks/useNavigation';
import {
  Container,
  RightContainer,
  TextAnswer,
  TextTitle,
  TitleContainer,
} from '@/pages/Main/components/AnswerCard/AnswerCard.styles';
import { DeleteButton } from '@/pages/Main/components/DeleteButton/DeleteButton';
import { EditButton } from '@/pages/Main/components/EditButton/EditButton';
import { useDeleteAnswer } from '@/pages/Main/hooks/useDeleteFeed';

type AnswerCardProps = {
  answer: string;
  answerId: string;
};

const AnswerCard = ({ answer, answerId }: AnswerCardProps) => {
  const { gotoSelectCategory, gotoDetailPage } = useNavigation();
  const deleteMutation = useDeleteAnswer(answerId);
  const handleEdit = () => {
    alert(`수정 페이지로 이동 ${answerId}`);
  };

  const handleDelete = async () => {
    if (window.confirm('정말로 이 답변을 삭제하시겠습니까?')) {
      try {
        await deleteMutation.mutateAsync();
        alert('답변이 성공적으로 삭제되었습니다.');
        gotoSelectCategory();
      } catch (error) {
        alert('답변 삭제 중 오류가 발생했습니다.');
        console.error(error);
      }
    }
  };

  const handleOnClick = () => {
    gotoDetailPage(answerId);
  };

  return (
    <Container onClick={handleOnClick}>
      <TitleContainer>
        <TextTitle>나의 답변</TextTitle>
        <RightContainer>
          <EditButton onClick={handleEdit} />
          <DeleteButton onClick={handleDelete} />
        </RightContainer>
      </TitleContainer>

      <TextAnswer>{answer}</TextAnswer>
    </Container>
  );
};

export default AnswerCard;
