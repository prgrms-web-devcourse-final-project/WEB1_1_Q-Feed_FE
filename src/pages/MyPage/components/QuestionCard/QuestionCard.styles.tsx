import styled from '@emotion/styled';
import theme from '@/styles/theme';

export const Container = styled.div`
  background-color: ${theme.colors.sub};
  padding: 0.375rem 1rem;
  border-radius: 0.937rem;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #EFE7DE;
    scale: 1.025;
  }
`;

export const Header = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 2rem;
`;

export const Date = styled.span`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size: 1rem;
  font-family: 'Open Sans';
  color: ${theme.colors.primary};
  font-weight: bold;
  text-align: center;
`;

export const LockButton = styled.button<{ isPrivate: boolean }>`
  position: absolute;
  right: 0;
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
`;

export const Content = styled.p`
  font-size: 1rem;
  color: ${theme.colors.gray[600]};
  font-weight: bold;
  text-align: center;
`;
