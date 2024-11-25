import type { Meta, StoryObj } from '@storybook/react';
import { CommentList } from './CommentList';

const meta = {
  title: 'Components/CommentList',
  component: CommentList,
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof CommentList>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleComments = [
  {
    id: '1',
    author: {
      name: '큐피드',
      profileImage: 'https://bit.ly/dan-abramov',
    },
    content: '맛집을 고르려면 일단 맛이 있어야돼욥',
    createdAt: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(), // 4시간 전
    likes: 128,
    isLiked: false,
    replyCount: 12,
  },
  {
    id: '2',
    author: {
      name: '사용자',
    },
    content: '완전 동의합니다! 맛있는 음식이 최고죠 😋',
    createdAt: new Date(Date.now() - 30 * 60 * 1000).toISOString(), // 30분 전
    likes: 5,
    isLiked: true,
    replyCount: 0,
  },
];

export const Default: Story = {
  args: {
    comments: sampleComments,
  },
};

export const NoComments: Story = {
  args: {
    comments: [],
  },
};

export const WithInteractions: Story = {
  args: {
    comments: sampleComments,
    onLikeComment: (commentId, isLiked, count) => {
      console.log('Like clicked:', { commentId, isLiked, count });
    },
    onReplyClick: (commentId) => {
      console.log('Reply clicked:', commentId);
    },
  },
};
