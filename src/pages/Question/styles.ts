import styled from '@emotion/styled';
import theme from '@/styles/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  background-color: ${theme.colors.background};
  width: 100%;
  height: 100%;
`;

export const TitleContainer = styled.div`
  text-align: center;
  margin-bottom: 2.5rem;
`;

export const Title = styled.h1`
  font-size: 1.125rem;
  font-weight: bold;
  margin-bottom: 0.125rem;
  font-family: ${theme.typography.fontFamily.korean};
  color: ${theme.colors.gray[600]};
`;

export const Date = styled.p`
  font-size: 1rem;
  font-family: ${theme.typography.fontFamily.english};
  color: ${theme.colors.gray[600]};
`;

export const Question = styled.p`
  font-family: ${theme.typography.header1.fontFamily.korean};
  font-weight: bold;
  font-size: 1.25rem;
  color: ${theme.colors.primary};
  text-align: center;
  margin-bottom: 1.875rem;
`;

export const ImageUploadContainer = styled.div`
  width: 100%;
  margin-bottom: 1rem;
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  border: none;
  border-radius: 1rem;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    scale: 1.02;
  }
`;
