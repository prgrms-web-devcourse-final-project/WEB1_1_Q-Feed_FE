import ProfileImage from '@/components/ui/ProfileImageCon/ProfileImageCon';
import type { Meta, StoryObj } from '@storybook/react';

// Meta 설정
const meta: Meta<typeof ProfileImage> = {
  title: 'Components/ui/ProfileImage', // Storybook 내에서 컴포넌트의 경로
  component: ProfileImage,
  argTypes: {
    src: {
      control: 'text',
      description: '이미지 URL',
    },
    size: {
      control: { type: 'number', min: 20, max: 200 },
      description: '이미지 크기(px)',
    },
    bgColor: {
      control: 'color',
      description: '배경색 (아이콘 또는 이미지 배경)',
    },
    alt: {
      control: 'text',
      description: '이미지 대체 텍스트',
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          '동그란 프로필 이미지를 표시하는 컴포넌트입니다. 이미지가 제공되지 않으면 기본 아이콘(IoPersonOutline)을 표시합니다.',
      },
    },
  },
};

export default meta;

// 스토리 정의
type Story = StoryObj<typeof ProfileImage>;

// 기본 스토리
export const Default: Story = {
  args: {
    src: 'https://via.placeholder.com/150',
    size: 50,
    bgColor: '#f5f5f5',
    alt: 'Default Profile Image',
  },
};

// 이미지가 없는 기본 아이콘 스토리
export const NoImage: Story = {
  args: {
    size: 50,
    bgColor: '#f5f5f5',
    alt: 'No Profile Image',
  },
};

// 큰 크기의 프로필 이미지
export const LargeProfile: Story = {
  args: {
    src: 'https://via.placeholder.com/300',
    size: 100,
    bgColor: '#e0f7fa',
    alt: 'Large Profile Image',
  },
};

// 사용자 정의 배경색
export const CustomBackground: Story = {
  args: {
    src: 'https://via.placeholder.com/150',
    size: 75,
    bgColor: '#ffccbc',
    alt: 'Custom Background Profile Image',
  },
};

// 이미지가 없는 큰 아이콘
export const LargeNoImage: Story = {
  args: {
    size: 100,
    bgColor: '#e0e0e0',
    alt: 'Large Default Icon',
  },
};
