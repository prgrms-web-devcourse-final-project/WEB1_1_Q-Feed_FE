import styled from '@emotion/styled';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { PopularPostCard } from '@/pages/Main/components/PopularPostCard/PopularPostCard';
import { PopularPost } from '@/pages/Main/type/popularPosts';

interface PopularPostSliderProps {
  popularPosts: PopularPost[];
}

export const PopularPostSlider = ({ popularPosts }: PopularPostSliderProps) => {
  return (
    <Container>
      <StyledSwiper
        slidesPerView={2}
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
      >
        {popularPosts.map((item, index) => (
          <SwiperSlide key={index}>
            <PopularPostCard post={item.post} />
          </SwiperSlide>
        ))}
      </StyledSwiper>
    </Container>
  );
};

export default PopularPostSlider;

const Container = styled.div`
  width: 100%;
`;

const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 100%;
  .swiper-slide {
    width: auto !important;
  }

  .swiper-pagination {
    display: none;
  }
`;
