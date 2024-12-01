import { useState } from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import {
  ButtonContainer,
  Count,
  IconWrapper,
} from '@/pages/AnswerDetail/components/VerticalHeartButton/VerticalHeartButton.styles';

type VerticalHeartButtonProps = {
  initialLiked?: boolean;
  initialCount?: number;
  onLikeChange?: (isLiked: boolean, count: number) => void;
  disabled?: boolean;
  size?: 'small' | 'medium' | 'large';
};

export const VerticalHeartButton = ({
  initialLiked = false,
  initialCount = 0,
  onLikeChange,
  disabled = false,
  size = 'medium',
}: VerticalHeartButtonProps) => {
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
