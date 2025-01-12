import styled from '@emotion/styled';
import theme from '@/styles/theme';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.sub};
  border-radius: 50%;
  width: 22px;
  height: 22px;

  :hover {
    background-color: ${theme.colors.gray[100]};
  }
`;
