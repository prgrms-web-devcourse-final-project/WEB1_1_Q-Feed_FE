import styled from '@emotion/styled';
import theme from '@/styles/theme';

export const Container = styled.div`
  padding: 2.5rem 1rem;
  background-color: ${theme.colors.background};
  min-height: calc(100vh - 3rem);
  margin-bottom: 5.25rem;
  overflow: hidden;
`;

export const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2.625rem;
`;

export const ProfileImageWrapper = styled.div`
  flex-shrink: 0;
`;

export const NameSection = styled.div`
  text-align: center;
`;

export const Name = styled.h1`
  font-size: 2.25rem;
  font-weight: bold;
  color: ${theme.colors.primary};
  font-family: ${theme.typography.fontFamily.korean};
`;

export const Id = styled.span`
  font-size: 1rem;
  color: ${theme.colors.primary};
  font-family: ${theme.typography.fontFamily.english};
`;

export const FollowInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

export const InfoItem = styled.div`
  font-family: ${theme.typography.fontFamily.english};
  font-size: 1rem;
  gap: 0.5rem;
  color: ${theme.colors.gray[300]};
`;

export const ButtonGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
`;

export const BioSection = styled.div`
  margin-bottom: 2.625rem;
`;

export const BioLabel = styled.h2`
  font-size: 1.25rem;
  font-weight: bold;
  color: ${theme.colors.gray[600]};
  font-family: ${theme.typography.header1.fontFamily};
`;

export const BioText = styled.p`
  font-size: 1rem;
  padding: 1rem;
  color: ${theme.colors.gray[600]};
  font-family: ${theme.typography.fontFamily.korean};
`;

export const AnswerSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const TitleSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
`;

export const Title = styled.h1`
  font-family: ${theme.typography.header1.fontFamily};
  color: ${theme.colors.primary};
  font-size: 20px;
  font-weight: bold;
  text-align: left;
`;

export const AnswerCounter = styled.span`
  font-family: ${theme.typography.fontFamily.english};
  color: ${theme.colors.gray[400]};
  font-size: 0.75rem;
  text-align: left;
  margin-left: 0.3rem;
`;
