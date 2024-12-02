import theme from '@/styles/theme';
import { HStack } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const Container = styled.div`
  background-color: ${theme.colors.background};
  height: 100vh;
`;

export const ContentWrapper = styled.div`
  padding: 45px 25px 0 25px;
`;

export const StyledHStack = styled(HStack)`
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const TextButton = styled.button`
  color: ${theme.colors.gray[300]};
  background: none;
  border: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
