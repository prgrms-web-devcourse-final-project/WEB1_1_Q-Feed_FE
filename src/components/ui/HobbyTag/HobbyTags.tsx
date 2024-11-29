import styled from '@emotion/styled';
import theme from '@/styles/theme';

interface HobbyTagsProps {
  tags: string[];
  backgroundColor?: string;
  borderColor?: string;
  fontColor?: string;
  className?: string;
}

interface TagProps {
  backgroundColor?: string;
  borderColor?: string;
  fontColor?: string;
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

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Tag = styled.span<TagProps>`
  padding: 0.5rem 1rem;
  border-radius: 3.125rem;
  border: 1px solid ${({ borderColor }) => borderColor};
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ fontColor }) => fontColor};
  font-size: ${theme.typography.body2.size};
  font-family: ${theme.typography.fontFamily.korean};
  font-weight: ${theme.typography.weights.medium};
`;

export default HobbyTags;
