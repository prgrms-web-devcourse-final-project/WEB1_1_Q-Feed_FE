import styled from '@emotion/styled';
import { Swiper } from 'swiper/react';

export const Container = styled.div`
  width: 100%;
`;

export const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 100%;
  .swiper-slide {
    width: auto !important;
  }

  .swiper-pagination {
    display: none;
  }
`;
