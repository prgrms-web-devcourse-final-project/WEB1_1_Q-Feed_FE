// CommentItem.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { CommentItem } from './CommentItem';

const meta: Meta<typeof CommentItem> = {
  title: 'Pages/AnswerDetail/Components/CommentItem',
  component: CommentItem,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '개별 댓글을 표시하는 컴포넌트입니다. 답글 기능과 좋아요 기능을 포함합니다.',
      },
    },
  },
  argTypes: {
    depth: {
      control: 'number',
      description: '댓글의 들여쓰기 깊이를 지정합니다.',
      table: {
        defaultValue: { summary: '0' },
      },
    },
    isCommentButtonExist: {
      control: 'boolean',
      description: '답글 달기 버튼의 표시 여부를 지정합니다.',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof CommentItem>;

const mockComment = {
  id: '1',
  content: '이것은 테스트 댓글입니다.',
  createdAt: new Date('2023-12-01T10:00:00').toISOString(),
  likes: 5,
  isLiked: false,
  replyCount: 2,
  author: {
    id: 'user1',
    name: '홍길동',
    profileImage: 'https://via.placeholder.com/40',
  },
  replies: [
    {
      id: '1-1',
      content: '답글 테스트입니다.',
      createdAt: new Date('2023-12-01T10:30:00').toISOString(),
      likes: 2,
      isLiked: false,
      replyCount: 0,
      author: {
        id: 'user2',
        name: '김철수',
        profileImage: 'https://via.placeholder.com/40',
      },
    },
  ],
};

export const Default: Story = {
  args: {
    comment: mockComment,
    depth: 0,
    isCommentButtonExist: false,
  },
  parameters: {
    docs: {
      description: {
        story: '기본적인 댓글 아이템의 모습입니다.',
      },
    },
  },
};

export const WithReplyButton: Story = {
  args: {
    comment: mockComment,
    depth: 0,
    isCommentButtonExist: true,
  },
  parameters: {
    docs: {
      description: {
        story: '답글 달기 버튼이 표시된 댓글 아이템입니다.',
      },
    },
  },
};

export const Nested: Story = {
  args: {
    comment: mockComment,
    depth: 1,
    isCommentButtonExist: true,
  },
  parameters: {
    docs: {
      description: {
        story: '들여쓰기가 적용된 중첩 댓글입니다.',
      },
    },
  },
};

export const WithInteractions: Story = {
  args: {
    comment: mockComment,
    depth: 0,
    isCommentButtonExist: true,
    onLikeComment: (commentId: string, isLiked: boolean, count: number) => {
      console.log('Like clicked:', { commentId, isLiked, count });
    },
    onReplyClick: (commentId: string) => {
      console.log('Reply clicked:', commentId);
    },
    onClick: (commentId: string) => {
      console.log('Comment clicked:', commentId);
    },
  },
  parameters: {
    docs: {
      description: {
        story: '모든 상호작용이 가능한 댓글 아이템입니다. 콘솔에서 이벤트를 확인할 수 있습니다.',
      },
    },
  },
};

export const LongContent: Story = {
  args: {
    comment: {
      ...mockComment,
      content: '이것은 매우 긴 댓글 내용입니다. '.repeat(10),
    },
    depth: 0,
    isCommentButtonExist: true,
  },
  parameters: {
    docs: {
      description: {
        story: '긴 내용의 댓글이 표시되는 모습입니다.',
      },
    },
  },
};
