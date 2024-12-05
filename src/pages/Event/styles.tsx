import styled from '@emotion/styled';
import theme from '@/styles/theme';

export const Container = styled.div`
  padding: 1.5rem 2rem;
  background-color: ${theme.colors.background};
  min-height: calc(100vh - 3rem);
  margin-bottom: 5.25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: ${theme.colors.primary};
  font-family: ${theme.typography.fontFamily.english};
  margin-bottom: 1.75rem;
  text-align: center;
`;

export const Question = styled.div`
  width: 16rem;
  font-size: 1.25rem;
  text-align: center;
  color: ${theme.colors.gray[500]};
  font-family: ${theme.typography.header1.fontFamily.korean};
  margin-bottom: 2.5rem;
`;

export const PreviousContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.white};
  border-radius: 0.9375rem;
  padding: 2rem;
  margin-bottom: 2rem;
  `;

export const AnswerLabel = styled.span`
  font-size: 1rem;
  font-family: ${theme.typography.header1.fontFamily.korean};
  color: ${theme.colors.gray[500]};
  margin-bottom: 0.75rem;
  `;

export const AnswerText = styled.span`
  font-size: 1rem;
  color: ${theme.colors.gray[500]};
  font-weight: bold;
  font-family: ${theme.typography.header1.fontFamily.korean};
  `;

export const ImageUploadContainer = styled.div`
  width: 100%;
  margin-bottom: 1rem;
`;

export const AnswerContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
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
