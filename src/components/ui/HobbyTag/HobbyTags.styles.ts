import styled from '@emotion/styled';
import theme from '@/styles/theme';

interface TagProps {
  backgroundColor?: string;
  borderColor?: string;
  fontColor?: string;
}

export const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const Tag = styled.span<TagProps>`
  padding: 0.5rem 1rem;
  border-radius: 3.125rem;
  border: 1px solid ${({ borderColor }) => borderColor};
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ fontColor }) => fontColor};
  font-size: ${theme.typography.body2.size};
  font-family: ${theme.typography.fontFamily.korean};
  font-weight: ${theme.typography.weights.medium};
`;
