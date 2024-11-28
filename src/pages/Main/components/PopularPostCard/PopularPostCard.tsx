import theme from '@/styles/theme';
import styled from '@emotion/styled';

type PopularPostCardProps = {
  post: string;
  src?: string;
};

export const PopularPostCard = ({ post, src }: PopularPostCardProps) => {
  const defaultSrc =
    'https://png.pngtree.com/thumb_back/fw800/background/20230613/pngtree-christmas-market-in-a-huge-german-city-image_2933958.jpg';

  return (
    <Container src={src ?? defaultSrc}>
      <PostText>{post}</PostText>
    </Container>
  );
};

type ContainerProps = {
  src: string;
};

const Container = styled.div<ContainerProps>`
  width: 208px;
  height: 152px;
  border-radius: 15px;
  position: relative; // 추가
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 15px;
    background-color: rgba(0, 0, 0, 0.4); // 검은색 오버레이, 0.5는 투명도
  }
`;

const PostText = styled.h1`
  font-family: ${theme.typography.fontFamily.korean};
  font-size: 12px;
  color: ${theme.colors.white};
  text-align: center;
  position: relative;
  z-index: 1;
`;
