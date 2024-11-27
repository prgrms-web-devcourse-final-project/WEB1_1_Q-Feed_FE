import { useState } from 'react';
import styled from '@emotion/styled';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

export interface LikeButtonProps {
  initialLiked?: boolean;
  initialCount?: number;
  onLikeChange?: (isLiked: boolean, count: number) => void;
  disabled?: boolean;
  size?: 'small' | 'medium' | 'large';
}

const LikeButtonContainer = ({
  initialLiked = false,
  initialCount = 0,
  onLikeChange,
  disabled = false,
  size = 'medium',
}: LikeButtonProps) => {
  const [isLiked, setIsLiked] = useState(initialLiked);
  const [count, setCount] = useState(initialCount);

  const handleClick = () => {
    if (disabled) return;

    const newIsLiked = !isLiked;
    const newCount = count + (newIsLiked ? 1 : -1);

    setIsLiked(newIsLiked);
    setCount(newCount);
    onLikeChange?.(newIsLiked, newCount);
  };

  const iconSize = {
    small: 16,
    medium: 24,
    large: 32,
  }[size];

  // 좋아요 숫자 포맷팅 (1000 -> 1k)
  const formatCount = (count: number): string => {
    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1)}m`;
    }
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}k`;
    }
    return count.toString();
  };

  return (
    <ButtonContainer isLiked={isLiked} onClick={handleClick} disabled={disabled}>
      <IconWrapper isLiked={isLiked}>
        {isLiked ? <AiFillHeart size={iconSize} /> : <AiOutlineHeart size={iconSize} />}
      </IconWrapper>
      <Count isLiked={isLiked}>{formatCount(count)}</Count>
    </ButtonContainer>
  );
};

export default LikeButtonContainer;

const ButtonContainer = styled.button<{ isLiked: boolean; disabled?: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0;
  border: none;
  background: none;
  transition: all 0.3s ease;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
`;

const IconWrapper = styled.div<{ isLiked: boolean }>`
  display: flex;
  align-items: center;
  color: ${(props) => (props.isLiked ? '#ef4444' : '#6b7280')};
`;

const Count = styled.span<{ isLiked: boolean }>`
  font-size: 0.725rem;
  color: #6b7280;
`;
