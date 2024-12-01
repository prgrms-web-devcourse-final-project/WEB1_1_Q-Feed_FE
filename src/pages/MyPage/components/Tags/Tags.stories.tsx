import Tags from '@/pages/MyPage/components/Tags/Tags';

export default {
  title: 'Components/Tags',
  component: Tags,
  tags: ['autodocs'], // 자동 문서화를 위해 추가
  args: {
    tags: ['여행', '스포츠', '맛집'], // 기본 태그
  },
  argTypes: {
    tags: { control: 'array', description: '태그 목록' },
  },
};

export const Default = {
  args: {
    tags: ['여행', '스포츠', '맛집'],
  },
};

export const EmptyTags = {
  args: {
    tags: [],
  },
};

export const ManyTags = {
  args: {
    tags: ['여행', '스포츠', '맛집', '패션', '독서', '영화', '음악', '미술', '게임'],
  },
};
