import styled from '@emotion/styled';
import theme from '@/styles/theme';

export const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

export const ProfileImageWrapper = styled.div`
  flex-shrink: 0;
`;

export const ProfileInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const NameAndId = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const Name = styled.h1`
  font-size: 1.25rem;
  font-weight: bold;
  margin: 0;
  color: ${theme.colors.primary};
  font-family: ${theme.typography.fontFamily.korean};
`;

export const Id = styled.h2`
  font-size: 0.875rem;
  font-weight: normal;
  color: ${theme.colors.primary};
  font-family: ${theme.typography.fontFamily.korean};
`;

export const DetailsAndTags = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
`;

export const Details = styled.div`
  display: flex;
  gap: 1.5rem;
`;

export const DetailItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DetailLabel = styled.span`
  font-size: 0.875rem;
  color: ${theme.colors.black};
  font-family: ${theme.typography.fontFamily.korean};
`;

export const DetailValue = styled.div`
  font-size: 0.875rem;
  font-weight: bold;
  color: ${theme.colors.gray[600]};
  font-family: ${theme.typography.fontFamily.english};
`;

export const Bio = styled.p`
  font-size: 0.875rem;
  color: ${theme.colors.gray[500]};
  font-family: ${theme.typography.fontFamily.korean};
`;
