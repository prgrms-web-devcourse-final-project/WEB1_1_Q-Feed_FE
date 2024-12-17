import { useState } from 'react';
import { SwiperSlide } from 'swiper/react';
import { ProfileCard } from '@/pages/Main/components/ProfileCard/ProfileCard';
import { FreeMode, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { RecommendProfile } from '@/pages/Main/type/profile';
import { StyledSwiper } from '@/pages/Main/components/ProfileSlider/ProfileSlider.styles';
import { useUserStore } from '@/store/userStore';
import { useFollowUser } from '@/pages/Main/hooks/useFollowUser';

interface RecommendProfileSliderProps {
  initialProfiles?: RecommendProfile[];
  onProfilesChange?: (profiles: RecommendProfile[]) => void;
}

export const ProfileSlider = ({
  initialProfiles,
  onProfilesChange,
}: RecommendProfileSliderProps) => {
  const { userId: followerId } = useUserStore();
  const [profiles, setProfiles] = useState<RecommendProfile[]>(initialProfiles || []);
  const followUser = useFollowUser();

  const closeRecommandCard = (id: string) => {
    const newProfiles = profiles.filter((profile) => profile.userId !== id);
    onProfilesChange?.(newProfiles);
    setProfiles(profiles.filter((profile) => profile.userId !== id));
  };

  const handleDelete = (id: string) => {
    closeRecommandCard(id);
  };

  const handleFollow = (id: string) => {
    if (followerId != '' && id != '') {
      followUser.mutate({
        followerId: followerId || '',
        followeeId: id,
      });
    }
    closeRecommandCard(id);
  };

  return (
    <StyledSwiper
      slidesPerView={2}
      spaceBetween={20}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      direction="horizontal"
    >
      {profiles.map((profile) => (
        <SwiperSlide key={profile.userId}>
          <ProfileCard
            name={profile.nickname}
            imgsrc={profile.profileImage}
            followerNum={profile.followerCount}
            onClickClose={() => handleDelete(profile.userId)}
            onClickFollow={() => handleFollow(profile.userId)}
          />
        </SwiperSlide>
      ))}
    </StyledSwiper>
  );
};
