import theme from '@/styles/theme';
import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
  display: inline-block;
`;

export const IconButton = styled.button`
  background: none;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  color: ${theme.colors.gray[400]};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: ${theme.colors.gray[600]};
  }
`;

export const MenuPopup = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  min-width: 160px;
  background-color: ${theme.colors.white};
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  z-index: 1000;
`;

export const MenuItem = styled.button`
  width: 100%;
  padding: 0.75rem 1rem;
  border: none;
  background: none;
  text-align: left;
  font-family: ${theme.typography.fontFamily.korean};
  font-size: ${theme.typography.body2.size};
  color: ${theme.colors.gray[600]};
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${theme.colors.sub};
  }

  &:not(:last-child) {
    border-bottom: 1px solid ${theme.colors.gray[100]};
  }
`;
