import type { Meta, StoryObj } from '@storybook/react';
import MemberList from './MemberList';
import { ThemeProvider } from '@emotion/react';
import theme from '@/styles/theme';

const meta: Meta<typeof MemberList> = {
  title: 'Components/QSpaceMember/MemberList',
  component: MemberList,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <div style={{ width: '600px', padding: '20px' }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof MemberList>;

const sampleMembers = [
  {
    id: '1',
    name: '백종원',
    role: '프로필 소개글',
    profileImage: undefined,
  },
  {
    id: '2',
    name: '김철수',
    role: '프로필 소개글',
    profileImage: 'https://example.com/profile2.jpg',
  },
  {
    id: '3',
    name: '이영희',
    role: '프로필 소개글',
    profileImage: undefined,
  },
];

export const Default: Story = {
  args: {
    members: sampleMembers,
    onResign: (memberId: string) => {
      console.log(`Member ${memberId} resigned`);
    },
  },
};

export const EmptyList: Story = {
  args: {
    members: [],
  },
};
