import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from '@emotion/styled';
import { ProfileCard } from '@/pages/Main/components/ProfileCard/ProfileCard';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import theme from '@/styles/theme';
import { Profile, ProfileSliderProps } from '@/pages/Main/type/profile';

export const ProfileSlider = ({ initialProfiles }: ProfileSliderProps) => {
  const [profiles, setProfiles] = useState<Profile[]>(
    initialProfiles || [
      {
        id: 1,
        name: '홍길동',
        imgsrc: '',
        followerName: '철수',
        followerNum: 100,
      },
      {
        id: 2,
        name: '영희',
        imgsrc: '',
        followerName: '둘리',
        followerNum: 3,
      },
      {
        id: 3,
        name: '순자',
        imgsrc: '',
        followerName: '토마토',
        followerNum: 1,
      },
      {
        id: 4,
        name: '감자',
        imgsrc: '',
        followerName: '고구마',
        followerNum: 77,
      },
      {
        id: 5,
        name: '곰돌이',
        imgsrc: '',
        followerName: '희동이',
        followerNum: 3,
      },
      {
        id: 6,
        name: '산타',
        imgsrc: '',
        followerName: '루돌프',
        followerNum: 11,
      },
    ]
  );

  const handleDelete = (id: number) => {
    setProfiles(profiles.filter((profile) => profile.id !== id));
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
        <SwiperSlide key={profile.id}>
          <ProfileCard {...profile} onClickClose={() => handleDelete(profile.id)} />
        </SwiperSlide>
      ))}
    </StyledSwiper>
  );
};

const StyledSwiper = styled(Swiper)`
  width: 100%;
  padding: 20px 0;
  .swiper-wrapper {
    display: flex;
    flex-direction: row;
  }

  .swiper-slide {
    flex: 0 0 auto;
    width: auto !important;
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: ${theme.colors.primary};
  }

  .swiper-pagination-bullet-active {
    background: ${theme.colors.primary};
  }
`;
