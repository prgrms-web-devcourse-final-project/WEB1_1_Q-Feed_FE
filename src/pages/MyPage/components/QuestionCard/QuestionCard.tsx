import { IoLockClosed, IoLockOpen } from "react-icons/io5";
import {
  Container,
  Header,
  Date,
  LockButton,
  Content,
} from "@/pages/MyPage/components/QuestionCard/QuestionCard.styles";

interface QuestionCardProps {
  date: string; // 질문 날짜
  content: string; // 질문 내용
  isPrivate: boolean; // 공개 여부
  onLockToggle?: () => void; // 공개/비공개 상태를 토글하는 함수
  onClick?: () => void; // 카드 클릭 이벤트 핸들러
}

const QuestionCard = ({
  date,
  content,
  isPrivate,
  onLockToggle,
  onClick,
}: QuestionCardProps) => {
  const handleCardClick = () => {
    onClick?.(); // 클릭 시 ID 반환
  };

  return (
    <Container onClick={handleCardClick}>
      <Header>
        <Date>{date}</Date>
        {onLockToggle && ( // onLockToggle이 전달된 경우에만 LockButton 렌더링
          <LockButton
            onClick={(e) => {
              e.stopPropagation();
              onLockToggle?.();
            }}
            isPrivate={isPrivate}
          >
            {isPrivate ? <IoLockClosed size="1rem" /> : <IoLockOpen size="1rem" />}
          </LockButton>
        )}
      </Header>
      <Content>{content}</Content>
    </Container>
  );
};

export default QuestionCard;
