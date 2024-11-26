// Logo.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Logo } from './Logo';

const meta: Meta<typeof Logo> = {
  title: 'Components/Logo',
  component: Logo,
  tags: ['autodocs'],
  argTypes: {
    width: {
      control: { type: 'text' },
      description: '로고의 너비 (px 또는 문자열)',
    },
    height: {
      control: { type: 'text' },
      description: '로고의 높이 (px 또는 문자열)',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Logo>;

// 기본 로고
export const Default: Story = {
  args: {
    width: 120,
    height: 40,
  },
};


// 문자열 단위를 사용한 로고
export const WithStringUnits: Story = {
  args: {
    width: '10rem',
    height: '4rem',
  },
};

