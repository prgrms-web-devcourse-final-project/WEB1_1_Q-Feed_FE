import styled from '@emotion/styled';
import { Button, CloseButton } from '@chakra-ui/react';
import theme from '@/styles/theme';

export const Container = styled.div`
  width: 180px;
  height: 235px;
  background-color: ${theme.colors.sub};
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 20px 0 rgba(0, 0, 0, 0.15);
  }
`;

export const ProfileWrapper = styled.div`
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledCloseButton = styled(CloseButton)`
  align-self: flex-end;
  color: ${theme.colors.primary};

  &:hover {
    background-color: transparent;
    color: ${theme.colors.gray[300]};
  }
`;

export const Name = styled.h1`
  width: 100%;
  margin-top: 10px;
  text-align: center;
  font-family: ${theme.typography.fontFamily.korean}; // Noto Sans KR
  font-size: 1.125rem; //18px
  color: ${theme.colors.black};
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Description = styled.h2`
  text-align: center;
  font-family: ${theme.typography.fontFamily.korean}; // Noto Sans KR
  font-size: 0.75rem; //12px
  color: ${theme.colors.gray[400]};
  font-weight: 400;
`;

export const StyledButton = styled(Button)`
  width: 100%;
  max-width: 96px;
  height: 36px;
  background: ${theme.colors.primary};
  color: ${theme.colors.white};
  font-family: ${theme.typography.fontFamily.english.header}; // open Sans
  font-weight: 600;
  border-radius: 30px;
  margin: 10px 0;

  &:hover {
    background: ${theme.colors.gray[300]};
  }
`;
