import styled from '@emotion/styled';
import theme from '@/styles/theme';

export const TextDate = styled.h1`
  width: 100%;
  font-family: 'Open Sans';
  font-size: ${theme.typography.body1.size};
  font-weight: semibold;
  color: ${theme.colors.primary};
  text-align: center;
`;

export const TextQuestion = styled.h2`
  width: 100%;
  font-family: 'GyeonggiBatang';
  font-size: ${theme.typography.title1.size};
  font-weight: bold;
  color: ${theme.colors.primary};
  text-align: center;
  word-wrap: break-word;
  overflow-wrap: break-word;
  white-space: pre-wrap;
  margin-top: 15px;
`;

export const Container = styled.div`
  width: 100%;
  min-height: 88px;
  height: auto;
  max-width: 377px;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
  box-shadow: 0 10px 16px 0 rgba(0, 0, 0, 0.2);
  padding: 20px 40px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 20px 0 rgba(0, 0, 0, 0.15);
  }
`;
