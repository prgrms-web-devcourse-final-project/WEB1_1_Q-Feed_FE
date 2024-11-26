import type { Meta, StoryObj } from '@storybook/react';
import GroupCard from './GroupCard';

const meta = {
  title: 'Components/QSpaceMain/GroupCard',
  component: GroupCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    imageUrl: {
      control: 'text',
      description: '그룹 이미지 URL',
    },
    title: {
      control: 'text',
      description: '그룹 제목',
    },
    description: {
      control: 'text',
      description: '그룹 설명',
    },
    membersCount: {
      control: 'number',
      description: '멤버 수',
    },
    isOpen: {
      control: 'boolean',
      description: '모집 상태',
    },
    createdAt: {
      control: 'text',
      description: '게시 시간',
    },
  },
} satisfies Meta<typeof GroupCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: '제주도 맛집 토론방',
    description: '제주도의 숨은 맛집 얘기해요!',
    membersCount: 133,
    isOpen: true,
    createdAt: '방금 전',
  },
};

export const WithImage: Story = {
  args: {
    imageUrl: '/api/placeholder/400/320',
    title: '제주도 맛집 토론방',
    description: '제주도의 숨은 맛집 얘기해요!',
    membersCount: 133,
    isOpen: true,
    createdAt: '방금 전',
  },
};

export const Closed: Story = {
  args: {
    title: '제주도 맛집 토론방',
    description: '제주도의 숨은 맛집 얘기해요!',
    membersCount: 133,
    isOpen: false,
    createdAt: '1시간 전',
  },
};
