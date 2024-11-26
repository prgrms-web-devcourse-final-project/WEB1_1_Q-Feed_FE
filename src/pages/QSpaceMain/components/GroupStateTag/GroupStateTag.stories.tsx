import type { Meta, StoryObj } from '@storybook/react';
import GroupStateTag from './GroupStateTag';

const meta = {
  title: 'Components/QSpaceMain/GroupStateTag',
  component: GroupStateTag,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    isOpen: {
      control: 'boolean',
      description: '모집 상태를 나타냅니다. true일 경우 모집중, false일 경우 모집완료로 표시됩니다.',
    },
  },
} satisfies Meta<typeof GroupStateTag>;

export default meta;
type Story = StoryObj<typeof meta>;

// 모집중 상태
export const Recruiting: Story = {
  args: {
    isOpen: true,
  },
};

// 모집완료 상태
export const Closed: Story = {
  args: {
    isOpen: false,
  },
};
