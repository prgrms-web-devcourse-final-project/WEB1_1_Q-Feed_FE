import { PopularPostCard } from '@/pages/Main/components/PopularPostCard/PopularPostCard';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof PopularPostCard> = {
  title: 'Components/PopularPostCard',
  component: PopularPostCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof PopularPostCard>;

export const WithImage: Story = {
  args: {
    post: '인기 답변입니다',
    src: '/images/mainback/fashion1.svg',
  },
};

export const WithoutImage: Story = {
  args: {
    post: '이미지가 없는 인기 답변',
  },
};

export const LongText: Story = {
  args: {
    post: '매우 긴 인기 답변 텍스트입니다. 이 텍스트는 카드의 레이아웃을 테스트하기 위한 것입니다.',
    src: '/images/mainback/fashion1.svg',
  },
};
