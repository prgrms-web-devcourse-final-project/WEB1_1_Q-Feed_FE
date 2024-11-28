import theme from '@/styles/theme';
import styled from '@emotion/styled';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { PopularPostCard } from '@/pages/Main/components/PopularPostCard/PopularPostCard';

interface PopularPost {
  post: string;
  src?: string | null;
}

interface PopularPostSliderProps {
  popularPosts: PopularPost[];
}

export const PopularPostSlider = ({popularPosts }: PopularPostSliderProps) => {
  return (
    <Container>
      <Title>지금 뜨는 인기 답변</Title>
      <StyledSwiper
         slidesPerView={2}
         spaceBetween={20}
         loop={true}
         autoplay={{
           delay: 5000,
           disableOnInteraction: false
         }}

         pagination={{
           clickable: true,
         }}
         modules={[Pagination,Autoplay]}
      >
         {popularPosts.map((item, index) => (
          <SwiperSlide key={index}>
            <PopularPostCard
              post={item.post}
              src={item.src}
            />
          </SwiperSlide>
        ))}

      </StyledSwiper>
    </Container>
  );
};

export default PopularPostSlider;

const Container = styled.div`
  width: 100%;
  padding: 20px 0;
`;

const Title = styled.h1`
  font-family: ${theme.typography.header1.fontFamily.korean};
  font-size: 20px;
  color: ${theme.colors.primary};
  font-weight: bold;
  text-align: left;
  margin-bottom: 20px;
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
  border : 1px solid red;

`;
