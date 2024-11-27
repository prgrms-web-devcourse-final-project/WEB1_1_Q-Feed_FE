import styled from '@emotion/styled';
import theme from '@/styles/theme';
import { useState } from 'react';

// 이미지 import
import travelImg from '@/assets/img/airplane.jpg';
import sportsImg from '@/assets/img/sports.jpg';
import fashionImg from '@/assets/img/fashion.jpg';
import cultureImg from '@/assets/img/culture.jpg';
import matzipImg from '@/assets/img/matzip.jpg';
import etcImg from '@/assets/img/etc.jpg';

interface CategoryItem {
  id: string;
  koreanName: string;
  englishName: string;
  image: string;
}

const categories: CategoryItem[] = [
  { id: 'travel', koreanName: '여행', englishName: 'Travel', image: travelImg },
  { id: 'sports', koreanName: '스포츠', englishName: 'Sports', image: sportsImg },
  { id: 'fashion', koreanName: '패션', englishName: 'Fashion', image: fashionImg },
  { id: 'culture', koreanName: '문화', englishName: 'Culture', image: cultureImg },
  { id: 'restaurant', koreanName: '맛집', englishName: 'Matzip', image: matzipImg },
  { id: 'etc', koreanName: '기타', englishName: 'Etc', image: etcImg },
];

interface CategorySelectContainerProps {
  onCategorySelect?: (categoryId: string) => void;
}

const CategorySelectContainer = ({ onCategorySelect }: CategorySelectContainerProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId);
    onCategorySelect?.(categoryId);
  };

  return (
    <Container>
      <Grid>
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            isSelected={selectedCategory === category.id}
            onClick={() => handleCategoryClick(category.id)}
          >
            <IconWrapper>
              <CategoryIcon src={category.image} alt={category.koreanName} />
            </IconWrapper>
            <TextContainer>
              <KoreanName>{category.koreanName}</KoreanName>
              <EnglishName className='en'>{category.englishName}</EnglishName>
            </TextContainer>
          </CategoryCard>
        ))}
      </Grid>
    </Container>
  );
};

const Container = styled.div`
  padding: 1rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
`;

const CategoryCard = styled.button<{ isSelected: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.white};
  border-radius: 1rem;
  padding: 1.5rem 1rem;
  cursor: pointer;
  border: 3px solid ${(props) => (props.isSelected ? theme.colors.primary : 'transparent')};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: all 0.2s ease-in-out;
  aspect-ratio: 1;
  width: 100%;

  &:hover {
    transform: translateY(-2px);
  }
`;

const IconWrapper = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CategoryIcon = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
`;

const KoreanName = styled.span`
  color: ${theme.colors.gray[600]};
  font-size: ${theme.typography.body1.size};
  font-weight: ${theme.typography.weights.medium};
`;

const EnglishName = styled.span`
  color: ${theme.colors.gray[400]};
  font-size: ${theme.typography.body2.size};
`;

export default CategorySelectContainer;
