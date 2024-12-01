import React from 'react';
import styled from '@emotion/styled';
import { IoLockClosed, IoLockOpen } from "react-icons/io5";
import theme from '@/styles/theme';

interface QuestionCardProps {
  date: string; // 질문 날짜
  content: string; // 질문 내용
  isPrivate: boolean; // 공개 여부
  onLockToggle?: () => void; // 공개/비공개 상태를 토글하는 함수
  onClick?: () => void; // 카드 클릭 이벤트 핸들러
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  date,
  content,
  isPrivate,
  onLockToggle,
  onClick,
}) => {
  const handleCardClick = () => {
    onClick?.(); // 클릭 시 ID 반환
  };

  return (
    <Container onClick={handleCardClick}>
      <Header>
        <Date>{date}</Date>
        <LockButton
          onClick={(e) => {
            e.stopPropagation();
            onLockToggle?.();
          }}
          isPrivate={isPrivate}
        >
          {isPrivate ? <IoLockClosed size="1rem" /> : <IoLockOpen size="1rem" />}
        </LockButton>
      </Header>
      <Content>{content}</Content>
    </Container>
  );
};

const Container = styled.div`
  background-color: ${theme.colors.sub};
  padding: 0.375rem 1rem;
  border-radius: 0.937rem;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #EFE7DE;
    scale: 1.025;
  }
`;

const Header = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 2rem;
`;

const Date = styled.span`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size: 1rem;
  font-family: 'Open Sans';
  color: ${theme.colors.primary};
  font-weight: bold;
  text-align: center;
`;

const LockButton = styled.button<{ isPrivate: boolean }>`
  position: absolute;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background: transparent;
  border: 1px solid ${({ isPrivate }) => (isPrivate ? '#FF480E' : '#00796B')};
  color: ${theme.colors.black};
  border-radius: 0.875rem;
  padding: 0.25rem 0.75rem;
  font-size: 0.875rem;
  cursor: pointer;
`;

const Content = styled.p`
  font-size: 1rem;
  color: ${theme.colors.gray[600]};
  font-weight: bold;
  text-align: center;
`;


export default QuestionCard;
