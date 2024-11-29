// QuestionCard.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { QuestionCard } from './QuestionCard';

const meta: Meta<typeof QuestionCard> = {
  title: 'Pages/Main/Components/QuestionCard',
  component: QuestionCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof QuestionCard>;

export const Default: Story = {
  args: {
    date: '2024.01.01',
    question: '맛집을 고르는 기준은 무엇인가요?',
  },
};

export const LongQuestion: Story = {
  args: {
    date: '2024.01.01',
    question: '매우 긴 질문입니다. 이 질문은 두 줄 이상으로 표시될 수 있습니다. 질문 카드의 레이아웃이 어떻게 변하는지 테스트해보세요.',
  },
};

export const EnglishContent: Story = {
  args: {
    date: 'January 1, 2024',
    question: 'This is today\'s question in English',
  },
};