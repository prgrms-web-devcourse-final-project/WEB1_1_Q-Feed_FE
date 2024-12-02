import type { Meta, StoryObj } from '@storybook/react';
import { InputBox } from './InputBox';

const meta = {
  title: 'Pages/AnswerDetail/components/InputBox',
  component: InputBox,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '사용자의 메시지 입력을 받는 입력 필드 컴포넌트입니다. 포커스 상태에 따라 스타일이 변경됩니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'text',
      description: '입력 필드의 현재 값',
      table: {
        type: { summary: 'string' },
      },
    },
    onChange: {
      action: 'changed',
      description: '입력값 변경 시 호출되는 핸들러 함수',
      table: {
        type: { summary: '(e: React.ChangeEvent<HTMLInputElement>) => void' },
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: '400px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof InputBox>;

export default meta;
type Story = StoryObj<typeof InputBox>;

/**
 * 기본 상태의 입력 필드입니다.
 */
export const Default: Story = {
  args: {
    value: '',
  },
};

/**
 * 텍스트가 입력된 상태의 입력 필드입니다.
 */
export const WithText: Story = {
  args: {
    value: '안녕하세요',
  },
};

/**
 * 포커스된 상태의 입력 필드입니다.
 * - 테두리 색상이 primary 색상으로 변경됩니다.
 * - 텍스트 색상이 검정색으로 변경됩니다.
 */
export const Focused: Story = {
  args: {
    value: '',
  },
  parameters: {
    pseudo: { focus: true },
  },
};
