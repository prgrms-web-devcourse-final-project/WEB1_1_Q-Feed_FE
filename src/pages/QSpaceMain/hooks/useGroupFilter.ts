import { useState } from 'react';
import type { GroupFilterState } from '../types/group';

export const useGroupFilter = (): GroupFilterState & {
  handleCategoryChange: (category: string, isSelected: boolean) => void;
  handleRecruitingChange: (isChecked: boolean) => void;
} => {
  const [activeCategory, setActiveCategory] = useState('전체');
  const [showOnlyRecruiting, setShowOnlyRecruiting] = useState(false);

  const handleCategoryChange = (category: string, isSelected: boolean) => {
    if (isSelected) {
      setActiveCategory(category);
    }
  };

  const handleRecruitingChange = (isChecked: boolean) => {
    setShowOnlyRecruiting(isChecked);
  };

  return {
    activeCategory,
    showOnlyRecruiting,
    handleCategoryChange,
    handleRecruitingChange,
  };
};
