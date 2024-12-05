import type { Meta, StoryObj } from '@storybook/react';
import MemberContainer from './MemberContainer';
import theme from '@/styles/theme';

const meta = {
  title: 'Components/QSpaceDetail/MemberContainer',
  component: MemberContainer,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: theme.colors.background },
        { name: 'dark', value: '#333333' },
      ],
    },
  },
  tags: ['autodocs'],
  argTypes: {
    memberCount: {
      control: 'number',
      description: '전체 멤버 수',
    },
    maxDisplayCount: {
      control: 'number',
      description: '최대 표시할 아이콘 수',
    },
    iconSize: {
      control: 'number',
      description: '아이콘의 크기 (px)',
    },
    lastChatTime: {
      control: 'date',
      description: '마지막 대화 시간',
    },
    onMemberListClick: {
      action: 'memberListClicked',
      description: '멤버 목록 버튼 클릭 핸들러',
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          width: '400px',
          borderRadius: '8px',
        }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof MemberContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 상태
export const Default: Story = {
  args: {
    memberCount: 133,
    maxDisplayCount: 5,
    iconSize: 32,
    lastChatTime: new Date(),
  },
};

// 방금 전 대화
export const JustNow: Story = {
  args: {
    memberCount: 133,
    maxDisplayCount: 5,
    iconSize: 32,
    lastChatTime: new Date(),
  },
};

// 30분 전 대화
export const MinutesAgo: Story = {
  args: {
    memberCount: 133,
    maxDisplayCount: 5,
    iconSize: 32,
    lastChatTime: new Date(Date.now() - 30 * 60000),
  },
};

// 3시간 전 대화
export const HoursAgo: Story = {
  args: {
    memberCount: 133,
    maxDisplayCount: 5,
    iconSize: 32,
    lastChatTime: new Date(Date.now() - 3 * 3600000),
  },
};

// 2일 전 대화
export const DaysAgo: Story = {
  args: {
    memberCount: 133,
    maxDisplayCount: 5,
    iconSize: 32,
    lastChatTime: new Date(Date.now() - 2 * 86400000),
  },
};

// 적은 수의 멤버
export const FewMembers: Story = {
  args: {
    memberCount: 3,
    maxDisplayCount: 5,
    iconSize: 32,
    lastChatTime: new Date(Date.now() - 30 * 60000),
  },
};

// 많은 멤버
export const ManyMembers: Story = {
  args: {
    memberCount: 999,
    maxDisplayCount: 5,
    iconSize: 32,
    lastChatTime: new Date(),
  },
};
