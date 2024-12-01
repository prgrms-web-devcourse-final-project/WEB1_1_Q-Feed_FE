import type { Meta, StoryObj } from '@storybook/react';
import { CommentItemList } from './CommentItemList';

const meta: Meta<typeof CommentItemList> = {
  title: 'Pages/AnswerDetail/components/CommentItemList',
  component: CommentItemList,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '댓글 목록을 표시하는 컴포넌트입니다.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof CommentItemList>;
const mockComments = [
  {
    id: '1',
    content: '첫 번째 댓글입니다.',
    createdAt: new Date('2023-12-01T10:00:00').toISOString(),
    likes: 5,
    isLiked: false,
    replyCount: 2,
    author: {
      id: 'user1',
      name: '사용자1',
      profileImage: 'https://via.placeholder.com/40',
    },
    replies: [
      {
        id: '1-1',
        content: '첫 번째 댓글의 답글입니다.',
        createdAt: new Date('2023-12-01T10:30:00').toISOString(),
        likes: 2,
        isLiked: false,
        replyCount: 0,
        author: {
          id: 'user2',
          name: '사용자2',
          profileImage: 'https://via.placeholder.com/40',
        },
      },
    ],
  },
  {
    id: '2',
    content: '두 번째 댓글입니다.',
    createdAt: new Date('2023-12-01T11:00:00').toISOString(),
    likes: 3,
    isLiked: true,
    replyCount: 0,
    author: {
      id: 'user3',
      name: '사용자3',
      profileImage: 'https://via.placeholder.com/40',
    },
    replies: [],
  },
];

export const Default: Story = {
  args: {
    comments: mockComments,
  },
  parameters: {
    docs: {
      description: {
        story: '기본적인 댓글 목록의 모습입니다.',
      },
    },
  },
};

export const Empty: Story = {
  args: {
    comments: [],
  },
  parameters: {
    docs: {
      description: {
        story: '댓글이 없는 상태의 목록입니다.',
      },
    },
  },
};

export const WithInteractions: Story = {
  args: {
    comments: mockComments,
    onLikeComment: (commentId: string, isLiked: boolean, count: number) => {
      console.log('Like clicked:', { commentId, isLiked, count });
    },
    onReplyClick: (commentId: string) => {
      console.log('Reply clicked:', commentId);
    },
  },
  parameters: {
    docs: {
      description: {
        story: '좋아요와 답글 기능이 활성화된 댓글 목록입니다.',
      },
    },
  },
};
