import React from 'react';
import { Tag, TagContainer } from '@/components/ui/HobbyTag/SelectableHobbyTags.styles';

interface SelectableHobbyTagsProps {
  tags: string[]; // 태그 목록
  selectedTags: string[]; // 초기 선택된 태그
  onSelectionChange: (selectedTags: string[]) => void; // 선택된 태그 전달 콜백
}

const SelectableHobbyTags = ({
  tags,
  selectedTags,
  onSelectionChange,
}: SelectableHobbyTagsProps) => {
  const handleTagClick = (tag: string, event: React.MouseEvent) => {
    event.preventDefault();

    const isAlreadySelected = selectedTags.includes(tag);

    const updatedSelection = isAlreadySelected
      ? selectedTags.filter((t) => t !== tag) // 선택 해제
      : [...selectedTags, tag]; // 선택 추가

    onSelectionChange(updatedSelection);
  };

  return (
    <TagContainer>
      {tags.map((tag) => (
        <Tag
          key={tag}
          isSelected={selectedTags.includes(tag)}
          onClick={(event) => handleTagClick(tag, event)} // 이벤트 객체 전달
        >
          {tag}
        </Tag>
      ))}
    </TagContainer>
  );
};

export default SelectableHobbyTags;
