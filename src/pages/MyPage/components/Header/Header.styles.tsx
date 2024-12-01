import styled from '@emotion/styled';
import theme from '@/styles/theme';

export const StyledHeader = styled.header`
  width: 100%;
  padding: 0.5rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${theme.colors.white};
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const Title = styled.h1`
  font-size: 1.25rem;
  font-family: ${theme.typography.header1.fontFamily.korean};
  font-weight: bold;
  color: ${theme.colors.black};
  text-align: center;
  flex: 1;
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const IconButton = styled.button`
  background: none;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.black};
`;
