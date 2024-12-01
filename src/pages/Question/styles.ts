import styled from '@emotion/styled';
import theme from '@/styles/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  background-color: ${theme.colors.background};
  width: 100%;
  min-height: calc(100vh - 8.25rem);
  margin-bottom: 5.25rem;
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

export const AnswerContainer = styled.div`
  width: 100%;
`;

export const InputLabel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`;

export const LabelText = styled.span`
  font-size: 1rem;
  color: ${theme.colors.gray[300]};
`;

export const LockButton = styled.button<{ isPrivate: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background: transparent;
  border: 1px solid ${({ isPrivate }) => (isPrivate ? '#FF480E' : '#00796B')};
  color: ${theme.colors.black};
  border-radius: 0.875rem;
  padding: 0.25rem 0.75rem;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    scale: 1.05;
  }
`;

export const Input = styled.textarea`
  width: 100%;
  height: 7rem;
  border: 1px solid ${theme.colors.gray[300]};
  padding: 0.875rem;
  resize: none;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  outline: none;
  font-family: ${theme.typography.fontFamily.korean};
  color: ${theme.colors.primary};

  &:focus {
    border-color: ${theme.colors.primary};
  }

  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${theme.colors.primary};
    border-radius: 0.25rem;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: ${theme.colors.gray[500]};
  }

  &::-webkit-scrollbar-track {
    background-color: ${theme.colors.gray[100]};
    border-radius: 0.25rem;
  }
`;

export const CharacterCount = styled.p`
  font-size: 0.75rem;
  color: ${theme.colors.gray[300]};
  margin-bottom: 1rem;
  align-self: flex-end;
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
