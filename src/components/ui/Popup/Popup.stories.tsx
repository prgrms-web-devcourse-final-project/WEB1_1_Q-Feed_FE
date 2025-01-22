import type { Meta, StoryObj } from '@storybook/react';
import { Popup } from '@/components/ui/Popup/Popup';

const meta: Meta<typeof Popup> = {
  title: 'Components/Popup',
  component: Popup,
  tags: ['autodocs'], // 자동 문서화를 위해 추가
  argTypes: {
    message: { control: 'text', description: '팝업의 메시지를 설정합니다.' },
    onClose: { action: 'onClose', description: '닫기 버튼 클릭 이벤트 핸들러' },
    onAction: { action: 'onAction', description: '답변하기 버튼 클릭 이벤트 핸들러' },
  },
};

export default meta;

type Story = StoryObj<typeof Popup>;

export const Default: Story = {
  args: {
    message: '데이터를 입력하세요',
  },
};
