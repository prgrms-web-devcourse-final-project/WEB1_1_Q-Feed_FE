import type { Meta, StoryObj } from '@storybook/react';
import ReplyContainer from './ReplyContainer';

const meta = {
  title: 'Components/ReplyContainer',
  component: ReplyContainer,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    groupCommentCount: {
      control: 'number',
      description: '대댓글 개수',
    },
    onReplyClick: {
      action: 'clicked',
      description: '답글 작성 버튼 클릭 시 호출되는 함수',
    },
    className: {
      control: 'text',
      description: '추가 스타일링을 위한 className',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ReplyContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 상태
export const Default: Story = {
  args: {
    groupCommentCount: 0,
    onReplyClick: () => console.log('Reply clicked'), // 필수 prop 추가
  },
};

// 대댓글이 있는 상태
export const WithComments: Story = {
  args: {
    groupCommentCount: 5,
    onReplyClick: () => console.log('Reply clicked'),
  },
};

// 많은 대댓글이 있는 상태
export const ManyComments: Story = {
  args: {
    groupCommentCount: 99,
    onReplyClick: () => console.log('Reply clicked'),
  },
};

// 클릭 가능한 상호작용 상태
export const Interactive: Story = {
  args: {
    groupCommentCount: 3,
    onReplyClick: () => console.log('Reply clicked'),
  },
  parameters: {
    docs: {
      description: {
        story: '클릭하면 대댓글 작성 영역이 토글됩니다.',
      },
    },
  },
};
