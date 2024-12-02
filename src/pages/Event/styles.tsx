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
