import MemberContainer from '@/pages/QSpace/QSpaceDetail/components/MemberContainer/MemberContainer';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof MemberContainer> = {
  title: 'Components/MemberContainer',
  component: MemberContainer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MemberContainer>;

export const Default: Story = {
  args: {
    memberCount: 8,
    lastChatTime: new Date(Date.now() - 1000 * 60 * 30).toISOString(), // 30분 전
    onMemberListClick: () => {
      console.log('Member list button clicked');
    },
  },
};
