import styled from '@emotion/styled';
import { Input } from '@chakra-ui/react';
import theme from '@/styles/theme';

export const Container = styled.div`
  width: 100%;
  height: 4rem;
  background: ${theme.colors.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const StyledInput = styled(Input)`
  border-radius: 1.875rem;
  font-size: 1rem;
  height: 3rem;
  border: 0.0625rem solid ${theme.colors.gray[300]};

  font-family: ${theme.typography.fontFamily.korean};
  color: ${theme.colors.gray[300]};

  &:focus {
    color: ${theme.colors.black};
  }
`;
