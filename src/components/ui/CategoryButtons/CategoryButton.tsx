import { StyledTag } from '@/components/ui/CategoryButtons/CategoryButton.styles';
import { useState, useEffect } from 'react';

interface CategoryTagProps {
  label: string;
  initialSelected?: boolean;
  onChange?: (isSelected: boolean) => void;
}

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
    <StyledTag isSelected={isSelected} onClick={handleClick} type="button">
      {label}
    </StyledTag>
  );
};

export default CategoryButton;
