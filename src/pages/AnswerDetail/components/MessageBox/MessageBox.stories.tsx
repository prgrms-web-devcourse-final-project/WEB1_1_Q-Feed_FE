import type { Meta, StoryObj } from '@storybook/react';
import { MessageBox } from './MessageBox';

const meta: Meta<typeof MessageBox> = {
  title: 'Pages/AnswerDetail/Components/MessageBox',
  component: MessageBox,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '메시지를 입력하고 전송할 수 있는 컴포넌트입니다. 메시지를 입력하고, 버튼을 클릭하거나 Enter 키를 누르면 입력됩니다.',
      },
    },
  },
  argTypes: {
    onSendMessage: {
      description: '메시지 전송 시 호출되는 콜백 함수입니다.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof MessageBox>;

export const Default: Story = {
  args: {
    onSendMessage: (message: string) => {
      alert(`Sent message: ${message}`);
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          '기본적인 메시지 입력창입니다. 메시지를 입력하고 전송 버튼을 클릭하거나 Enter 키를 눌러 전송할 수 있습니다.',
      },
    },
  },
};

export const WithCallback: Story = {
  args: {
    onSendMessage: (message: string) => {
      alert(`Sent message: ${message}`);
    },
  },
  parameters: {
    docs: {
      description: {
        story: '메시지 전송 시 알림창으로 전송된 메시지를 확인할 수 있습니다.',
      },
    },
  },
};
