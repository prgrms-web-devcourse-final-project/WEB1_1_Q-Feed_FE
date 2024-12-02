import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'], // 자동 문서화를 위한 태그
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: '기본 버튼',
  },
};

export const Primary: Story = {
  args: {
    children: '프라이머리 버튼',
  },
};
