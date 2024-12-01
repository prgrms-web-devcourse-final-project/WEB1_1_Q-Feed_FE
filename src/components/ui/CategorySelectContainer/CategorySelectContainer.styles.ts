import styled from '@emotion/styled';
import theme from '@/styles/theme';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
`;

export const CategoryCard = styled.button<{ isSelected: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.white};
  border-radius: 1rem;
  padding: 1rem 0.5rem;
  cursor: pointer;
  border: 3px solid ${(props) => (props.isSelected ? theme.colors.primary : 'transparent')};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: all 0.2s ease-in-out;
  aspect-ratio: 1;
  width: 100%;

  &:hover {
    transform: translateY(-2px);
  }
`;

export const IconWrapper = styled.div`
  width: 2rem;
  height: 2rem;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CategoryIcon = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0.25rem;
`;

export const KoreanName = styled.span`
  color: ${theme.colors.primary};
  font-size: 1rem;
  font-weight: ${theme.typography.weights.bold};
`;

export const EnglishName = styled.span`
  color: ${theme.colors.gray[400]};
  font-size: 0.6rem;
`;
