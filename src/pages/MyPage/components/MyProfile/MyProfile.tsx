import ProfileImage from '@/components/ui/ProfileImageCon/ProfileImageCon';
import Tags from '@/pages/MyPage/components/Tags/Tags';
import { useNavigate } from 'react-router-dom';
import {
  ProfileSection,
  ProfileImageWrapper,
  ProfileInfo,
  NameAndId,
  Name,
  Id,
  DetailsAndTags,
  Details,
  DetailItem,
  DetailLabel,
  DetailValue,
  Bio,
} from '@/pages/MyPage/components/MyProfile/MyProfile.styles';

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

const MyProfile = ({ profile }: MyProfileProps) => {
  const navigate = useNavigate();
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
            <DetailItem onClick={() => navigate('/followers?tab=follower')}>
              <DetailLabel>팔로워</DetailLabel>
              <DetailValue>{profile.followers}</DetailValue>
            </DetailItem>
            <DetailItem onClick={() => navigate('/followers?tab=following')}>
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

export default MyProfile;
