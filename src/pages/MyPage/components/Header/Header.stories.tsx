import type { Meta, StoryObj } from '@storybook/react';
import Header from './Header';

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text', description: 'The title displayed in the center of the header' },
    className: { control: false, description: 'Optional additional class names' },
  },
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    title: '프로필',
  },
};

export const WithoutTitle: Story = {
  args: {
    title: '',
  },
};

export const CustomTitle: Story = {
  args: {
    title: '마이페이지',
  },
};
