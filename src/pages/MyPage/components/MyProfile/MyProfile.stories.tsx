import type { Meta, StoryObj } from '@storybook/react';
import MyProfile from './MyProfile';

const meta: Meta<typeof MyProfile> = {
  title: 'Components/MyProfile',
  component: MyProfile,
  tags: ['autodocs'],
  argTypes: {
    profile: {
      description: 'Profile data containing name, ID, followers, following, bio, image, and tags',
      control: false, // Disable direct control for complex objects
    },
  },
};

export default meta;

type Story = StoryObj<typeof MyProfile>;

export const Default: Story = {
  args: {
    profile: {
      name: '정주연',
      id: 'ChungJuyeon',
      followers: 185,
      following: 72,
      bio: '안녕하세요! 현재 푸드 칼럼리스트로 활동하고 있는 작가입니다.',
      profileImage: 'https://via.placeholder.com/100',
      tags: ['여행', '맛집', '독서'],
    },
  },
};

export const CustomProfile: Story = {
  args: {
    profile: {
      name: '김철수',
      id: 'CheolsooKim',
      followers: 102,
      following: 80,
      bio: '나는 여행을 사랑하는 사람입니다. 언제나 새로운 곳을 탐험하고 싶어요!',
      profileImage: 'https://via.placeholder.com/100',
      tags: ['캠핑', '음악', '디자인'],
    },
  },
};

export const EmptyTags: Story = {
  args: {
    profile: {
      name: '이영희',
      id: 'YoungheeLee',
      followers: 54,
      following: 30,
      bio: '여러분과 함께하고 싶습니다!',
      profileImage: 'https://via.placeholder.com/100',
      tags: [],
    },
  },
};
