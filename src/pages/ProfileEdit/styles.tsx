import styled from '@emotion/styled';
import theme from '@/styles/theme';

export const Container = styled.div`
  padding: 1.5rem 1rem;
  background-color: ${theme.colors.background};
  min-height: calc(100vh - 3.75rem);
  padding-bottom: 5.25rem;
`;

export const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-top: 3rem;
  margin-bottom: 1.875rem;
`;

export const ProfileImageWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const EditButton = styled.button`
  position: absolute;
  bottom: 0;
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  border: none;
  border-radius: 50%;
  width: 1.875rem;
  height: 1.875rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transform: translateY(50%);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: ${theme.colors.gray[600]};
  }
`;

export const Name = styled.h2`
  font-size: 1.125rem;
  font-weight: bold;
  color: ${theme.colors.primary};
  font-family: ${theme.typography.fontFamily.korean};
  margin-top: 0.625rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FormGroup = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  width: 100%;
`;

export const Label = styled.label`
  flex: 0 0 5rem;
  font-size: 0.875rem;
  font-weight: bold;
  color: ${theme.colors.gray[400]};
  margin-top: 0.5rem;
`;

export const Input = styled.input`
  flex: 1;
  padding: 0.562rem 1rem;
  border: 1px solid ${theme.colors.gray[300]};
  border-radius: 0.937rem;
  font-size: 0.875rem;
  color: ${theme.colors.gray[400]};
  background-color: transparent;

  :focus {
    border: 1px solid ${theme.colors.primary};
  }
`;

export const TextAreaWrapper = styled.div`
  flex: 1;
  position: relative;
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid ${theme.colors.gray[300]};
  border-radius: 0.937rem;
  font-size: 0.875rem;
  color: ${theme.colors.gray[600]};
  background-color: transparent;
  resize: none;
  height: 7.5rem;

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
    background-color: transparent;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 0.25rem;
  }
`;

export const CharacterCount = styled.p`
  position: absolute;
  right: 1rem;
  bottom: 0.75rem;
  font-size: 0.75rem;
  color: ${theme.colors.gray[300]};
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 0.5rem 1rem;
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  font-family: ${theme.typography.fontFamily.korean};
  border: none;
  border-radius: 1rem;
  font-size: 1rem;
  cursor: pointer;
  text-align: center;
  margin-top: 2rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    scale: 1.02;
  }
`;
