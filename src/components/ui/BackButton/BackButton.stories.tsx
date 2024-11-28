import type { Meta, StoryObj } from '@storybook/react';
import BackButton from './BackButton';

const meta = {
  title: 'Components/ui/BackButton',
  component: BackButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BackButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    width: '2.5rem',
    height: '2.5rem',
  },
};

export const Large: Story = {
  args: {
    width: '3.5rem',
    height: '3.5rem',
  },
};

export const Small: Story = {
  args: {
    width: '2rem',
    height: '2rem',
  },
};
