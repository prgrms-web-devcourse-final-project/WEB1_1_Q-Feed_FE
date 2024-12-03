import styled from '@emotion/styled';
import theme from '@/styles/theme';

export const Grid = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
  padding: 0 0.5rem;

  @media (min-width: 375px) {
    gap: 0.75rem;
    padding: 0 0.75rem;
  }

  @media (min-width: 430px) {
    gap: 1rem;
    padding: 0;
  }
`;

export const CategoryCard = styled.button<{ isSelected: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.white};
  border-radius: 0.75rem;
  padding: 0.75rem 0.25rem;
  cursor: pointer;
  border: 2px solid ${(props) => (props.isSelected ? theme.colors.primary : 'transparent')};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: all 0.2s ease-in-out;
  aspect-ratio: 1;
  width: 100%;

  @media (min-width: 375px) {
    border-radius: 0.875rem;
    padding: 0.875rem 0.375rem;
    border-width: ${(props) => (props.isSelected ? '2.5px' : '0')};
  }

  @media (min-width: 430px) {
    border-radius: 1rem;
    padding: 1rem 0.5rem;
    border-width: ${(props) => (props.isSelected ? '3px' : '0')};
  }

  &:hover {
    transform: translateY(-2px);
  }
`;

export const IconWrapper = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  margin-bottom: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 375px) {
    width: 1.75rem;
    height: 1.75rem;
    margin-bottom: 0.375rem;
  }

  @media (min-width: 430px) {
    width: 2rem;
    height: 2rem;
    margin-bottom: 0.5rem;
  }
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

  @media (min-width: 375px) {
    margin-top: 0.375rem;
  }

  @media (min-width: 430px) {
    margin-top: 0.5rem;
  }
`;

export const KoreanName = styled.span`
  color: ${theme.colors.primary};
  font-size: 0.875rem;
  font-weight: ${theme.typography.weights.bold};

  @media (min-width: 375px) {
    font-size: 0.9375rem;
  }

  @media (min-width: 430px) {
    font-size: 1rem;
  }
`;

export const EnglishName = styled.span`
  color: ${theme.colors.gray[400]};
  font-size: 0.5rem;

  @media (min-width: 375px) {
    font-size: 0.55rem;
  }

  @media (min-width: 430px) {
    font-size: 0.6rem;
  }
`;
