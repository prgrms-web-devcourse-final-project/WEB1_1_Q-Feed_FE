import styled from '@emotion/styled';
import theme from '@/styles/theme';
import { STYLES } from '@/pages/Login/Constants/styles';
import { HStack } from '@chakra-ui/react';

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Container = styled.div`
  height: calc(100vh - ${STYLES.LAYOUT.HEADER_HEIGHT});
  min-height: ${STYLES.LAYOUT.MIN_HEIGHT};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${STYLES.LAYOUT.PADDING};
  gap: ${STYLES.LAYOUT.GAP};
  background: ${theme.colors.background};
`;

export const StyledStack = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const StyledHStack = styled(HStack)`
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Title = styled.h1`
  font-size: ${theme.typography.title1.size};
  line-height: ${theme.typography.title1.lineHeight};
  font-weight: ${theme.typography.title1.weight};
  text-align: center;
  color: ${theme.colors.primary};
  margin-top: 40px;
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
