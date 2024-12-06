import type { Meta, StoryObj } from '@storybook/react';
import { CommentList } from './CommentList';

const meta: Meta<typeof CommentList> = {
  title: 'Components/CommentList',
  component: CommentList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CommentList>;

const mockComments = [
  {
    id: 1,
    content: '정말 좋은 토론이네요! 저도 참여하고 싶습니다.',
    author: '김토론',
    profileImage: '/api/placeholder/40/40',
    createdAt: new Date(Date.now() - 1000 * 60 * 30).toISOString(), // 30분 전
    likeCount: 5,
  },
  {
    id: 2,
    content: '흥미로운 주제입니다. 다른 분들의 의견도 궁금하네요.',
    author: '이의견',
    profileImage: '/api/placeholder/40/40',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(), // 2시간 전
    likeCount: 3,
  },
  {
    id: 3,
    content: '오늘 토론 주제가 매우 시의적절한 것 같아요.',
    author: '박토의',
    profileImage: '/api/placeholder/40/40',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(), // 1일 전
    likeCount: 8,
  },
];

export const Default: Story = {
  args: {
    comments: mockComments,
    onLikeComment: (commentId) => {
      console.log(`Comment ${commentId} liked`);
    },
  },
};
