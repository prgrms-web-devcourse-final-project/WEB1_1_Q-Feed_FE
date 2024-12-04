import type { Meta, StoryObj } from '@storybook/react';
import DetailsHeader from './DetailsHeader';

const meta = {
  title: 'Components/QSpaceDetail/DetailsHeader',
  component: DetailsHeader,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: '토론방의 제목',
    },
    creator: {
      control: 'text',
      description: '방 개설자의 닉네임',
    },
    profileImage: {
      control: 'text',
      description: '방 개설자의 프로필 이미지 URL',
    },
  },
} satisfies Meta<typeof DetailsHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: '제주도 맛집 토론방',
    creator: '닉네임',
  },
};

export const WithProfileImage: Story = {
  args: {
    title: '제주도 맛집 토론방',
    creator: '닉네임',
    profileImage: 'https://via.placeholder.com/40',
  },
};

export const LongTitle: Story = {
  args: {
    title: '아주 긴 제목의 토론방입니다. 이렇게 길게 써도 잘 보여야 합니다.',
    creator: '닉네임',
  },
};

export const LongCreatorName: Story = {
  args: {
    title: '제주도 맛집 토론방',
    creator: '아주긴닉네임입니다만어떠신가요',
  },
};
