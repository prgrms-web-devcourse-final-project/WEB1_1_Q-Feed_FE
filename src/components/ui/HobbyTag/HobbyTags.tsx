import { Tag, TagContainer } from '@/components/ui/HobbyTag/HobbyTags.styles';
import theme from '@/styles/theme';

interface HobbyTagsProps {
  tags: string[];
  backgroundColor?: string;
  borderColor?: string;
  fontColor?: string;
  className?: string;
}

export const HobbyTags = ({
  tags,
  backgroundColor = theme.colors.primary,
  borderColor = theme.colors.primary,
  fontColor = theme.colors.white,
  className,
}: HobbyTagsProps) => {
  return (
    <TagContainer className={className}>
      {tags.map((tag) => (
        <Tag
          key={tag}
          backgroundColor={backgroundColor}
          borderColor={borderColor}
          fontColor={fontColor}
        >
          {tag}
        </Tag>
      ))}
    </TagContainer>
  );
};

export default HobbyTags;
