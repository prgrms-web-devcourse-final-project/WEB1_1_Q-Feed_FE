import { useState } from 'react';

// 이미지 import
import travelImg from '@/assets/images/airplane.jpg';
import sportsImg from '@/assets/images/sports.jpg';
import fashionImg from '@/assets/images/fashion.jpg';
import cultureImg from '@/assets/images/culture.jpg';
import matzipImg from '@/assets/images/matzip.jpg';
import etcImg from '@/assets/images/etc.jpg';
import {
  CategoryCard,
  CategoryIcon,
  EnglishName,
  Grid,
  IconWrapper,
  KoreanName,
  TextContainer,
} from '@/components/ui/CategorySelectContainer/CategorySelectContainer.styles';

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
    <>
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
              <EnglishName className="en">{category.englishName}</EnglishName>
            </TextContainer>
          </CategoryCard>
        ))}
      </Grid>
    </>
  );
};

export default CategorySelectContainer;
