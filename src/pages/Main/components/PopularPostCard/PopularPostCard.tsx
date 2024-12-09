import {
  Container,
  PostText,
} from '@/pages/Main/components/PopularPostCard/PopularPostCard.styles';

type PopularPostCardProps = {
  post: string;
  src?: string;
};

export const PopularPostCard = ({ post }: PopularPostCardProps) => {
  const defaultSrc =
    'https://png.pngtree.com/thumb_back/fw800/background/20230613/pngtree-christmas-market-in-a-huge-german-city-image_2933958.jpg';

  return (
    <Container src={defaultSrc}>
      <PostText>{post}</PostText>
    </Container>
  );
};
