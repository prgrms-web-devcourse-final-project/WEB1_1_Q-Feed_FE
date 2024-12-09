import type { Meta, StoryObj } from '@storybook/react';
import MemberList from './MemberList';

const meta: Meta<typeof MemberList> = {
  title: 'Components/MemberList',
  component: MemberList,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '그룹의 멤버 목록을 표시하는 컴포넌트입니다. 각 멤버의 프로필 이미지, 닉네임, 소개글을 보여줍니다.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MemberList>;

const mockMembers = [
  {
    groupMemberId: 1,
    userId: 'user1',
    userNickname: '김토론',
    userProfile: '/api/placeholder/48/48',
    description: '안녕하세요! 토론을 좋아하는 김토론입니다.',
  },
  {
    groupMemberId: 2,
    userId: 'user2',
    userNickname: '박토의',
    userProfile: '/api/placeholder/48/48',
    description: '다양한 주제로 이야기 나누고 싶습니다.',
  },
  {
    groupMemberId: 3,
    userId: 'user3',
    userNickname: '이의견',
    userProfile: '/api/placeholder/48/48',
    description: '',
  },
];

export const Default: Story = {
  args: {
    members: mockMembers,
    onResign: (memberId) => {
      console.log(`Member resigned: ${memberId}`);
    },
  },
};
