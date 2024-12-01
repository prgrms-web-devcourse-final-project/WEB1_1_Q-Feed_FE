import React from 'react';
import styled from '@emotion/styled';
import theme from '@/styles/theme';
import ProfileImage from '@/components/ui/ProfileImageCon/ProfileImageCon';
import Tags from '@/pages/MyPage/components/Tags';

interface MyProfileProps {
  profile: {
    name: string;
    id: string;
    followers: number;
    following: number;
    bio: string;
    profileImage: string;
    tags: string[];
  };
}

const MyProfile: React.FC<MyProfileProps> = ({ profile }) => {

  return (
    <ProfileSection>
      <ProfileImageWrapper>
        <ProfileImage
          src={profile.profileImage}
          size={100}
          alt={`${profile.name}의 프로필 이미지`}
        />
      </ProfileImageWrapper>
      <ProfileInfo>
        <NameAndId>
          <Name>{profile.name}</Name>
          <Id>{`(${profile.id})`}</Id>
        </NameAndId>
        <DetailsAndTags>
          <Details>
            <DetailItem>
              <DetailLabel>팔로워</DetailLabel>
              <DetailValue>{profile.followers}</DetailValue>
            </DetailItem>
            <DetailItem>
              <DetailLabel>팔로잉</DetailLabel>
              <DetailValue>{profile.following}</DetailValue>
            </DetailItem>
          </Details>
          <Tags tags={profile.tags} />
        </DetailsAndTags>
        <Bio>{profile.bio}</Bio>
      </ProfileInfo>
    </ProfileSection>
  );
};

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const ProfileImageWrapper = styled.div`
  flex-shrink: 0;
`;

const ProfileInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const NameAndId = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Name = styled.h1`
  font-size: 1.25rem;
  font-weight: bold;
  margin: 0;
  color: ${theme.colors.primary};
  font-family: ${theme.typography.fontFamily.korean};
`;

const Id = styled.h2`
  font-size: 0.875rem;
  font-weight: normal;
  color: ${theme.colors.primary};
  font-family: ${theme.typography.fontFamily.korean};
`;

const DetailsAndTags = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
`;

const Details = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const DetailItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DetailLabel = styled.span`
  font-size: 0.875rem;
  color: ${theme.colors.black};
  font-family: ${theme.typography.fontFamily.korean};
`;

const DetailValue = styled.div`
  font-size: 0.875rem;
  font-weight: bold;
  color: ${theme.colors.gray[600]};
  font-family: ${theme.typography.fontFamily.english};
`;

const Bio = styled.p`
  font-size: 0.875rem;
  color: ${theme.colors.gray[500]};
  font-family: ${theme.typography.fontFamily.korean};
`;

export default MyProfile;
