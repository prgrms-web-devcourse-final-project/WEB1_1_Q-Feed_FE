import type { Meta, StoryObj } from '@storybook/react';
import { SendButton } from './SendButton';

const meta = {
  title: 'Components/ui/SendButton',
  component: SendButton,
  parameters: {
    layout: 'centered',
    componentSubtitle: '메시지 전송 버튼 컴포넌트',
  },
  argTypes: {
    onClick: {
      action: 'clicked',
      description: '클릭 이벤트 핸들러',
    },
  },
} satisfies Meta<typeof SendButton>;

export default meta;
type Story = StoryObj<typeof SendButton>;

export const Default: Story = {
  args: {
    onClick: () => alert('메시지 전송'),
  },
};
