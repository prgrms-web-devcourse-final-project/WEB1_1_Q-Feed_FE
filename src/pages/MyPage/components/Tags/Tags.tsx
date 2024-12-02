import {
  TagContainer,
  Tag
} from '@/pages/MyPage/components/Tags/Tags.styles'

interface TagsProps {
  tags: string[]; // 태그 목록
}

const Tags = ({ tags }: TagsProps) => {
  return (
    <TagContainer>
      {tags.map((tag) => (
        <Tag key={tag}>{tag}</Tag>
      ))}
    </TagContainer>
  );
};

export default Tags;
