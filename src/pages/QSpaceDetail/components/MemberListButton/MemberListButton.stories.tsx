// MemberListButton.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import MemberListButton from './MemberListButton';

const meta = {
  title: 'Components/QSpaceDetail/MemberListButton',
  component: MemberListButton,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'light',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' },
  },
} satisfies Meta<typeof MemberListButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
