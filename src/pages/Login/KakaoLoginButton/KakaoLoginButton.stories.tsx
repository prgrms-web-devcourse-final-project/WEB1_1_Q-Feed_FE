// KakaoLoginButton.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { KakaoLoginButton } from './KakaoLoginButton';

const meta = {
  title: 'Pages/Login/KakaoLoginButton',
  component: KakaoLoginButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '카카오 로그인을 위한 버튼 컴포넌트입니다. 왼쪽에 카카오톡 아이콘이 고정되어 있습니다.',
      },
    },
  },
  argTypes: {
    text: {
      description: '버튼에 표시될 텍스트입니다.',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '카카오 로그인' },
      },
    },
    onClick: {
      description: '버튼 클릭 시 실행될 콜백 함수입니다.',
      action: 'clicked',
      table: {
        type: { summary: '() => void' },
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof KakaoLoginButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 스토리
export const Default: Story = {
  args: {
    text: '카카오 로그인',
    onClick: () => alert('카카오 로그인 버튼 클릭'),
  },
};

