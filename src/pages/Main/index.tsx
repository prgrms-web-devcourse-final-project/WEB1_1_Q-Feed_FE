import { useState } from 'react';
import styled from '@emotion/styled';
import CategoryButton from '@/components/ui/CategoryButtons/CategoryButton';
import Header from '@/components/common/Header';
import { QuestionCard } from '@/pages/Main/components/QuestionCard/QuestionCard';
import { AnswerCard } from '@/pages/Main/components/AnswerCard/AnswerCard';
import { PopularPostSlider } from '@/pages/Main/components/PopularPostSlider/PopularPostSlider';
import theme from '@/styles/theme';
import { ProfileSlider } from '@/pages/Main/components/ProfileSlider/ProfileSlider';

const categories = ['여행', '스포츠', '패션', '문화', '맛집', '기타'];

const dummyData = [
  { post: '나는 국내 여행으로도 만족이야', src: null },
  {
    post: '따끈한 일본 온천으로 놀러가고싶어',
    src: 'https://cdn.traveltimes.co.kr/news/photo/202411/410169_35552_1437.jpg',
  },
  {
    post: '여행은 무슨 집이 최고야야',
    src: 'https://i.namu.wiki/i/_VR5WHEDuh8GTDefHS5Q9hRraEwIEwHVMMFNwzr3uDAgXeQ-2ht67CM8tj4KtttckiCj7-VOdzeOQnpSz7ks8w.webp',
  },
  {
    post: '태국 망고 먹고싶어',
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrSHVl8viXH3OPR1UyFBqVdeF80pdytyDieQ&s',
  },
  {
    post: '대만가서 딤섬 먹고싶다',
    src: 'https://i.namu.wiki/i/VJ3wVc3XFU2ksCFrU3TFUeG4vpB6SG0MivSNHN3jRM2SuAaM5MD018FNBV3QKQj9mKsvzL3Dnu17M0g_z35Wdg.webp',
  },
  {
    post: '라스베가스에 가서 잭팟을 노리겠어',
    src: 'https://static.hanatour.com/product/2019/02/01/0055e0rtfv/default.jpg',
  },
];

const userProfileData = [
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
    name: '올라프',
    imgsrc: '',
    followerName: '엘사',
    followerNum: 13,
  },
  {
    id: 5,
    name: '산타',
    imgsrc: '',
    followerName: '루돌프',
    followerNum: 1,
  },
];

export const Main = () => {
  const [activeCategory, setActiveCategory] = useState('여행');

  const handleCategoryChange = (category: string, isSelected: boolean) => {
    if (isSelected) {
      setActiveCategory(category);
      console.log('Selected category:', category);
    }
  };

  return (
    <Container>
      <Header />
      <CategorySection>
        <CategoryList>
          {categories.map((category) => (
            <CategoryButton
              key={category}
              label={category}
              initialSelected={category === activeCategory}
              onChange={(isSelected) => handleCategoryChange(category, isSelected)}
            />
          ))}
        </CategoryList>
      </CategorySection>

      <Body>
        <QuestionCard
          date="2024.11.28"
          question="오늘 당장 해외여행을 떠날수 있다면 어디로 갈건가요!?"
        />

        <AnswerCard answer="독일 크리스마스 마켓 구경하고싶어요🎄" />
        <PopularPostSlider popularPosts={dummyData} />
        <ProfileSlideWrapper>
          <ProfileSlider initialProfiles={userProfileData} />
        </ProfileSlideWrapper>
      </Body>
    </Container>
  );
};

export default Main;

const Container = styled.div`
  border: 1px solid red;
  background: ${theme.colors.background};
  align-items: center;
  justify-content: center;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
`;

const CategorySection = styled.div`
  padding: 1rem 0;
  overflow-x: auto;
  white-space: nowrap;
`;

const CategoryList = styled.div`
  display: flex;
  gap: 0.5rem;
  padding: 0 1rem;
`;

const ProfileSlideWrapper = styled.div`
  width: 100%;
`;
