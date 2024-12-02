import type { Meta, StoryObj } from '@storybook/react';
import ReSignButton from './ReSignButton';

const meta: Meta<typeof ReSignButton> = {
  title: 'Components/QSpaceMember/ReSignButton',
  component: ReSignButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' },
    disabled: {
      control: 'boolean',
      description: '버튼 비활성화 여부',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ReSignButton>;

export const Default: Story = {
  args: {
    disabled: false,
  },
};
