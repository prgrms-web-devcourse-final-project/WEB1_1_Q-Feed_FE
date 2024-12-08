import type { Meta, StoryObj } from '@storybook/react';
import DetailsHeader from './DetailsHeader';

const meta: Meta<typeof DetailsHeader> = {
  title: 'Components/DetailsHeader',
  component: DetailsHeader,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DetailsHeader>;

export const Default: Story = {
  args: {
    groupName: '프로그래밍 스터디 모임',
    adminNickname: '김개발',
    adminProfile: '/api/placeholder/40/40',
  },
};
