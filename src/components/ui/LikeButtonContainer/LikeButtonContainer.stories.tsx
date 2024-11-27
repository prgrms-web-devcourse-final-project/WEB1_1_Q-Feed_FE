import LikeButton from '@/components/ui/LikeButtonContainer/LikeButtonContainer';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/ui/LikeButton',
  component: LikeButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    initialLiked: {
      control: 'boolean',
      description: '초기 좋아요 상태를 설정합니다.',
    },
    initialCount: {
      control: 'number',
      description: '초기 좋아요 개수를 설정합니다.',
    },
    onLikeChange: {
      action: 'liked',
      description: '좋아요 상태가 변경될 때 호출되는 콜백 함수입니다.',
    },
    disabled: {
      control: 'boolean',
      description: '버튼의 비활성화 상태를 설정합니다.',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: '버튼의 크기를 설정합니다.',
    },
  },
} satisfies Meta<typeof LikeButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    initialLiked: false,
    initialCount: 0,
    disabled: false,
    size: 'medium',
  },
};

export const WithLikes: Story = {
  args: {
    initialLiked: false,
    initialCount: 999,
    disabled: false,
    size: 'medium',
  },
};

export const HighLikes: Story = {
  args: {
    initialLiked: true,
    initialCount: 1500,
    disabled: false,
    size: 'medium',
  },
};

export const VeryHighLikes: Story = {
  args: {
    initialLiked: true,
    initialCount: 1500000,
    disabled: false,
    size: 'medium',
  },
};
