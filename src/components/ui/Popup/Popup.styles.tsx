import styled from '@emotion/styled';
import theme from '@/styles/theme';

export const PopupContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 25rem;
  min-width: 20rem;
  background-color: ${theme.colors.white};
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  padding: 1.5rem;
  text-align: center;
  z-index: 1000;
`;

export const CloseButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  color: ${theme.colors.primary};
`;

export const PopupTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: bold;
  color: ${theme.colors.primary};
  font-family: ${theme.typography.fontFamily.english};
  margin-bottom: 1.562rem;
  text-align: center;
`;

export const PopupContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PopupMessage = styled.p`
  font-size: 1.25rem;
  font-weight: bold;
  color: ${theme.colors.gray[600]};
  font-family: ${theme.typography.header1.fontFamily.korean};
  margin-bottom: 2.25rem;
  text-align: center;
`;

export const PopupButton = styled.button`
  width: 90%;
  padding: 0.75rem;
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  border: none;
  border-radius: 1rem;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  margin-bottom: 0.625rem;

  &:hover {
    scale: 1.02;
  }
`;
