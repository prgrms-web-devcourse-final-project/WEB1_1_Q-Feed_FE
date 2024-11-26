import type { Meta, StoryObj } from '@storybook/react';
import { ReplyContainer } from './ReplyContainer';
import { action } from '@storybook/addon-actions';

const meta = {
  title: 'Components/ReplyContainer',
  component: ReplyContainer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    replyCount: {
      control: { type: 'number', min: 0 },
      description: '답글의 개수',
    },
    onReplyClick: {
      description: '답글 아이콘 클릭 시 호출되는 함수',
    },
    className: {
      description: '컴포넌트에 적용할 추가 스타일 클래스',
    },
  },
} satisfies Meta<typeof ReplyContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 스토리
export const Default: Story = {
  args: {
    replyCount: 5,
    onReplyClick: action('reply-clicked'),
  },
};

// 답글이 없는 경우
export const NoReplies: Story = {
  args: {
    replyCount: 0,
    onReplyClick: action('reply-clicked'),
  },
};

// 많은 답글이 있는 경우
export const ManyReplies: Story = {
  args: {
    replyCount: 999,
    onReplyClick: action('reply-clicked'),
  },
};

// 커스텀 스타일이 적용된 경우
export const CustomStyled: Story = {
  args: {
    replyCount: 5,
    onReplyClick: action('reply-clicked'),
    className: 'custom-style',
  },
  parameters: {
    docs: {
      description: {
        story: '커스텀 클래스를 통해 스타일을 변경할 수 있습니다.',
      },
    },
  },
};

// 호버 상태를 보여주기 위한 스토리
export const Hover: Story = {
  args: {
    replyCount: 5,
    onReplyClick: action('reply-clicked'),
  },
  parameters: {
    pseudo: { hover: true },
    docs: {
      description: {
        story: '마우스를 올렸을 때의 상태를 보여줍니다.',
      },
    },
  },
};
