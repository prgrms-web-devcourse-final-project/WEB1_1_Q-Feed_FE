// KebabMenu.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import KebabMenu from './KebabMenu';

const meta = {
  title: 'Components/QSpaceDetail/KebabMenu',
  component: KebabMenu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    initialRecruitmentStatus: {
      control: 'boolean',
      description: '초기 모집 상태 (true: 모집 중, false: 모집 완료)',
    },
    onEditClick: {
      action: 'edited',
      description: '수정 버튼 클릭 핸들러',
    },
    onDeleteClick: {
      action: 'deleted',
      description: '삭제 버튼 클릭 핸들러',
    },
    onRecruitmentStatusChange: {
      action: 'recruitment status changed',
      description: '모집 상태 변경 핸들러',
    },
  },
} satisfies Meta<typeof KebabMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    initialRecruitmentStatus: true,
  },
};

export const RecruitingComplete: Story = {
  args: {
    initialRecruitmentStatus: false,
  },
};
