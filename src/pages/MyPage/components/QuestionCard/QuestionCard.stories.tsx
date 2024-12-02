import type { Meta, StoryObj } from '@storybook/react';
import QuestionCard from './QuestionCard';

const meta: Meta<typeof QuestionCard> = {
  title: 'Components/QuestionCard',
  component: QuestionCard,
  tags: ['autodocs'],
  argTypes: {
    date: { control: 'text', description: 'The date of the question.' },
    content: { control: 'text', description: 'The content of the question.' },
    isPrivate: {
      control: 'boolean',
      description: 'Indicates if the question is private or public.',
    },
    onLockToggle: { action: 'lockToggle', description: 'Toggles lock status.' },
    onClick: { action: 'cardClick', description: 'Handles card click.' },
  },
};

export default meta;

type Story = StoryObj<typeof QuestionCard>;

export const Default: Story = {
  args: {
    date: '2024-11-28',
    content: '맛집을 고르는 기준은 무엇인가요?',
    isPrivate: true,
  },
};

export const PublicQuestion: Story = {
  args: {
    date: '2024-11-28',
    content: '가장 좋아하는 운동은 무엇인가요?',
    isPrivate: false,
  },
};

