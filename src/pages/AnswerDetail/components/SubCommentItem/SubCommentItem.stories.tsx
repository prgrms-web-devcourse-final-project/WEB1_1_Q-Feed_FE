// SubCommentItem.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { SubCommentItem } from './SubCommentItem';

const meta: Meta<typeof SubCommentItem> = {
  title: 'Pages/AnswerDetail/Components/SubCommentItem',
  component: SubCommentItem,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `대댓글을 표현하기 위한 컴포넌트입니다.`,
      },
    },
  },
  argTypes: {
    comment: {
      description: '답글 데이터를 포함하는 객체입니다.',
    },
    onLikeComment: {
      description: '좋아요 버튼 클릭 시 호출되는 콜백 함수입니다.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof SubCommentItem>;

const mockComment = {
  id: '1',
  content: '댓글 내용입니다.',
  createdAt: '2024-11-30T08:00:00.000Z',
  likes: 5,
  isLiked: false,
  replyCount: 0,
  author: {
    name: '홍길동',
    profileImage: 'https://i.pinimg.com/236x/fe/5c/9e/fe5c9ecee03c6eb1cc967ee875702110.jpg',
  },
};

export const Default: Story = {
  args: {
    comment: mockComment,
  },
  parameters: {
    docs: {
      description: {
        story: '기본적인 답글 컴포넌트의 모습입니다.',
      },
    },
  },
};

export const LikedComment: Story = {
  args: {
    comment: {
      ...mockComment,
      isLiked: true,
    },
  },
  parameters: {
    docs: {
      description: {
        story: '사용자가 좋아요를 누른 상태의 답글입니다.',
      },
    },
  },
};

export const LongContent: Story = {
  args: {
    comment: {
      ...mockComment,
      content: '매우 긴 댓글 내용입니다. '.repeat(10),
    },
  },
  parameters: {
    docs: {
      description: {
        story: '긴 내용의 답글이 표시되는 모습입니다. 내용이 길어도 레이아웃이 깨지지 않습니다.',
      },
    },
  },
};

export const NoProfileImage: Story = {
  args: {
    comment: {
      ...mockComment,
      author: {
        ...mockComment.author,
        profileImage: '',
      },
    },
  },
  parameters: {
    docs: {
      description: {
        story: '프로필 이미지가 없는 경우 기본 아바타가 표시됩니다.',
      },
    },
  },
};

export const WithInteractions: Story = {
  args: {
    comment: mockComment,
    onLikeComment: (commentId, isLiked, count) => {
      console.log('Like clicked:', { commentId, isLiked, count });
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          '좋아요 기능이 활성화된 상태입니다. 좋아요 버튼 클릭 시 콘솔에서 이벤트를 확인할 수 있습니다.',
      },
    },
  },
};
