import { useState } from 'react';
import { Tag, TagContainer } from '@/components/ui/HobbyTag/SelectableHobbyTags.styles';

interface SelectableHobbyTagsProps {
  tags: string[]; // 태그 목록
  selectedTags?: string[]; // 초기 선택된 태그
  onSelectionChange: (selectedTags: string[]) => void; // 선택된 태그 전달 콜백
}

const SelectableHobbyTags = ({
  tags,
  selectedTags = [],
  onSelectionChange,
}: SelectableHobbyTagsProps) => {
  const [selected, setSelected] = useState<string[]>(selectedTags);

  const handleTagClick = (tag: string) => {
    setSelected((prevSelected) => {
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
        <Tag key={tag} isSelected={selected.includes(tag)} onClick={() => handleTagClick(tag)}>
          {tag}
        </Tag>
      ))}
    </TagContainer>
  );
};

export default SelectableHobbyTags;
