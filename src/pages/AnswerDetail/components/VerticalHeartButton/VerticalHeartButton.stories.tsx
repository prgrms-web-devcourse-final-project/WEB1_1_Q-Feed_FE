// VerticalHeartButton.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { VerticalHeartButton } from './VerticalHeartButton';

const meta: Meta<typeof VerticalHeartButton> = {
  title: 'pages/AnswerDetail/Components/VerticalHeartButton',
  component: VerticalHeartButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `좋아요 버튼과 좋아요 수가 세로로 나열되어있는 컴포넌트입니다.`,
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: '버튼의 크기를 지정합니다.',
      table: {
        defaultValue: { summary: 'medium' },
      },
    },
    initialLiked: {
      control: 'boolean',
      description: '초기 좋아요 상태를 지정합니다.',
      table: {
        defaultValue: { summary: 'false' }, // 문자열로 변경
      },
    },
    initialCount: {
      control: 'number',
      description: '초기 좋아요 수를 지정합니다.',
      table: {
        defaultValue: { summary: '0' }, // 문자열로 변경
      },
    },
    disabled: {
      control: 'boolean',
      description: '버튼의 비활성화 상태를 지정합니다.',
      table: {
        defaultValue: { summary: 'false' }, // 문자열로 변경
      },
    },
    onLikeChange: {
      description: '좋아요 상태가 변경될 때 호출되는 콜백 함수입니다.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof VerticalHeartButton>;

export const Default: Story = {
  args: {
    initialCount: 0,
    initialLiked: false,
    size: 'medium',
    disabled: false,
  },
  parameters: {
    docs: {
      description: {
        story: '기본적인 VerticalHeartButton의 모습입니다.',
      },
    },
  },
};

export const SmallSize: Story = {
  args: {
    ...Default.args,
    size: 'small',
  },
  parameters: {
    docs: {
      description: {
        story: '작은 크기의 VerticalHeartButton입니다.',
      },
    },
  },
};

export const LargeSize: Story = {
  args: {
    ...Default.args,
    size: 'large',
  },
  parameters: {
    docs: {
      description: {
        story: '큰 크기의 VerticalHeartButton입니다.',
      },
    },
  },
};

export const WithLikes: Story = {
  args: {
    ...Default.args,
    initialCount: 1234,
  },
  parameters: {
    docs: {
      description: {
        story:
          '좋아요 수가 표시된 상태의 VerticalHeartButton입니다. 1000 이상의 숫자는 1k 형식으로 표시됩니다.',
      },
    },
  },
};

export const Liked: Story = {
  args: {
    ...Default.args,
    initialLiked: true,
    initialCount: 1,
  },
  parameters: {
    docs: {
      description: {
        story: '이미 좋아요가 눌린 상태의 VerticalHeartButton입니다.',
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          '비활성화된 상태의 VerticalHeartButton입니다. 클릭이 불가능하며 시각적으로 비활성화되어 있음을 나타냅니다.',
      },
    },
  },
};
