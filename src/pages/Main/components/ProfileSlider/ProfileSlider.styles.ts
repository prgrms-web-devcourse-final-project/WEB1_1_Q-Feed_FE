import theme from '@/styles/theme';
import styled from '@emotion/styled';
import { Swiper } from 'swiper/react';

export const StyledSwiper = styled(Swiper)`
  width: 100%;
  padding: 20px 0 30px 0;
  .swiper-wrapper {
    display: flex;
    flex-direction: row;
  }

  .swiper-slide {
    flex: 0 0 auto;
    width: auto !important;
    margin-bottom: 10px;
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: ${theme.colors.primary};
  }

  .swiper-pagination-bullet-active {
    background: ${theme.colors.primary};
  }
`;
