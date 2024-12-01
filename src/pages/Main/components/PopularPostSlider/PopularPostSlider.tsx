import { SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { PopularPostCard } from '@/pages/Main/components/PopularPostCard/PopularPostCard';
import { PopularPost } from '@/pages/Main/type/popularPosts';
import {
  Container,
  StyledSwiper,
} from '@/pages/Main/components/PopularPostSlider/PopularPostSlider.styles';

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
