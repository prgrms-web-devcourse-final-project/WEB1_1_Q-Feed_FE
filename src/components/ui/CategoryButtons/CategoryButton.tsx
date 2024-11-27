import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import theme from '@/styles/theme';

interface CategoryTagProps {
  label: string;
  initialSelected?: boolean;
  onChange?: (isSelected: boolean) => void;
}

const StyledTag = styled.button<{ isSelected?: boolean }>`
  padding: 0.5rem 1.25rem;
  border-radius: 50px;
  border: 1px solid ${theme.colors.gray[300]};
  background-color: ${(props) => (props.isSelected ? theme.colors.primary : theme.colors.white)};
  color: ${(props) => (props.isSelected ? theme.colors.white : theme.colors.gray[500])};
  font-family: ${theme.typography.body1};
  font-size: ${theme.typography.body1.size};
  font-weight: ${theme.typography.body1.weight};
  line-height: ${theme.typography.body1.lineHeight};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  flex-shrink: 0;

  &:hover {
    background-color: ${(props) => (props.isSelected ? theme.colors.primary : theme.colors.gray[100])};
  }
`;

const CategoryButton = ({ label, initialSelected = false, onChange }: CategoryTagProps) => {
  const [isSelected, setIsSelected] = useState(initialSelected);

  useEffect(() => {
    setIsSelected(initialSelected);
  }, [initialSelected]);

  const handleClick = () => {
    const newState = !isSelected;
    setIsSelected(newState);
    onChange?.(newState);
  };

  return (
    <StyledTag isSelected={isSelected} onClick={handleClick} type='button'>
      {label}
    </StyledTag>
  );
};

export default CategoryButton;
