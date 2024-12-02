// LoginButton.stories.tsx
import LoginButton from '@/pages/Login/components/LoginButton/LoginButton';
import type { Meta, StoryObj } from '@storybook/react';
const meta = {
  title: 'Pages/Login/LoginButton',
  component: LoginButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '로그인 페이지에서 사용되는 버튼 컴포넌트입니다.',
      },
    },
  },
  argTypes: {
    text: {
      description: '버튼에 표시될 텍스트입니다.',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '로그인' },
      },
    },
    width: {
      description: '버튼의 너비를 지정합니다 (CSS width 값)',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '100%' },
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
} satisfies Meta<typeof LoginButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 스토리
export const Default: Story = {
  args: {
    text: '로그인',
    onClick: () => alert('로그인 버튼 클릭'),
  },
  parameters: {
    docs: {
      description: {
        story: '기본적인 형태의 로그인 버튼입니다. 너비가 100%인 상태로 표시됩니다.',
      },
    },
  },
};

// 사이즈 지정
export const WithFixedWidth: Story = {
  args: {
    text: '로그인',
    width: '200px',
    onClick: () => alert('로그인 버튼 클릭'),
  },
  parameters: {
    docs: {
      description: {
        story: 'String 형식으로 너비 값을 지정할 수 있습니다',
      },
    },
  },
};

// 다른 텍스트를 가진 버튼
export const WithDifferentText: Story = {
  args: {
    text: '카카오 로그인',
    onClick: () => alert('카카오 로그인 버튼 클릭'),
  },
  parameters: {
    docs: {
      description: {
        story: '버튼에 들어갈 텍스트 문구를 지정할 수 있습니다',
      },
    },
  },
};
