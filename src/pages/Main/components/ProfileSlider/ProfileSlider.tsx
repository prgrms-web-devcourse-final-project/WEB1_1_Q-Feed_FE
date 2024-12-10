import { useState } from 'react';
import { SwiperSlide } from 'swiper/react';
import { ProfileCard } from '@/pages/Main/components/ProfileCard/ProfileCard';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { RecommendProfile, RecommendProfileSliderProps } from '@/pages/Main/type/profile';
import { StyledSwiper } from '@/pages/Main/components/ProfileSlider/ProfileSlider.styles';

export const ProfileSlider = ({ initialProfiles }: RecommendProfileSliderProps) => {
  const [profiles, setProfiles] = useState<RecommendProfile[]>(initialProfiles || []);

  const handleDelete = (id: string) => {
    setProfiles(profiles.filter((profile) => profile.userId !== id));
  };

  return (
    <StyledSwiper
      modules={[Navigation, Pagination]}
      spaceBetween={20}
      slidesPerView={1000}
      navigation
      pagination={{ clickable: true }}
      direction="horizontal"
    >
      {profiles.map((profile) => (
        <SwiperSlide key={profile.userId}>
          <ProfileCard
            name={profile.nickname}
            imgsrc={profile.profileImage}
            followerNum={profile.followerCount}
            onClickClose={() => handleDelete(profile.userId)}
          />
        </SwiperSlide>
      ))}
    </StyledSwiper>
  );
};
