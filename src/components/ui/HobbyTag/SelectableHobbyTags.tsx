import React, { useState } from 'react';
import styled from '@emotion/styled';
import theme from '@/styles/theme'

interface SelectableHobbyTagsProps {
  tags: string[]; // 태그 목록
  onSelectionChange: (selectedTags: string[]) => void; // 선택된 태그 전달 콜백
}

export const SelectableHobbyTags: React.FC<SelectableHobbyTagsProps> = ({ tags, onSelectionChange }) => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleTagClick = (tag: string) => {
    setSelectedTags((prevSelected) => {
      const isAlreadySelected = prevSelected.includes(tag);

      const updatedSelection = isAlreadySelected
        ? prevSelected.filter((t) => t !== tag) // 선택 해제
        : [...prevSelected, tag]; // 선택 추가

      onSelectionChange(updatedSelection); // 부모 컴포넌트에 선택된 태그 전달
      return updatedSelection;
    });
  };

  return (
    <TagContainer>
      {tags.map((tag) => (
        <Tag
          key={tag}
          isSelected={selectedTags.includes(tag)}
          onClick={() => handleTagClick(tag)}
        >
          {tag}
        </Tag>
      ))}
    </TagContainer>
  );
};

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Tag = styled.button<{ isSelected: boolean }>`
  padding: 0.5rem 1rem;
  border-radius: 3.125rem;
  border: ${({ isSelected }) => (isSelected ? `1px solid ${theme.colors.primary}` : `1px solid ${theme.colors.gray[300]}`)};
  background-color: ${({ isSelected }) => (isSelected ? theme.colors.primary : 'transparent')};
  color: ${({ isSelected }) => (isSelected ? theme.colors.white : theme.colors.gray[300])};
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    color: ${theme.colors.white};
    border-color: ${theme.colors.gray[300]};
    background-color: ${theme.colors.gray[300]};
  }
`;
