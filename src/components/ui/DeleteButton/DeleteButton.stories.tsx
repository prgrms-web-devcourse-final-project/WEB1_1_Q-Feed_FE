import DeleteButton from '@/components/ui/DeleteButton/DeleteButton';

import type { Meta, StoryObj } from '@storybook/react';
const meta: Meta<typeof DeleteButton> = {
  title: 'Components/ui/DeleteButton',
  component: DeleteButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '삭제 기능을 위한 버튼 컴포넌트입니다. 크기 조절이 가능하며 Hover 시 툴팁이 표시됩니다.',
      },
    },
  },
  argTypes: {
    onClick: {
      description: '버튼 클릭 시 실행될 함수',
      action: 'clicked',
    },
    width: {
      description: '버튼의 너비',
      control: 'text',
      table: {
        type: { summary: 'string | number' },
      },
    },
    height: {
      description: '버튼의 높이',
      control: 'text',
      table: {
        type: { summary: 'string | number' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof DeleteButton>;

// 기본 크기
export const Default: Story = {
  args: {
    width: '2.5rem',
    height: '2.5rem',
    onClick: () => alert('삭제 버튼이 클릭되었습니다.'),
  },
};

// 큰 크기
export const Large: Story = {
  args: {
    width: '6.25rem',
    height: '6.25rem',
    onClick: () => alert('삭제 버튼이 클릭되었습니다.'),
  },
};
