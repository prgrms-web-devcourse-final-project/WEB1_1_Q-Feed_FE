import type { Meta, StoryObj } from '@storybook/react';
import EventPopup from '@/pages/Event/components/EventPopup/EventPopup';

const meta: Meta<typeof EventPopup> = {
  title: 'Components/EventPopup',
  component: EventPopup,
  tags: ['autodocs'], // 자동 문서화를 위해 추가
  argTypes: {
    title: { control: 'text', description: '팝업의 제목을 설정합니다.' },
    message: { control: 'text', description: '팝업의 메시지를 설정합니다.' },
    onClose: { action: 'onClose', description: '닫기 버튼 클릭 이벤트 핸들러' },
    onAction: { action: 'onAction', description: '답변하기 버튼 클릭 이벤트 핸들러' },
  },
};

export default meta;

type Story = StoryObj<typeof EventPopup>;

export const Default: Story = {
  args: {
    title: 'Christmas Special Q',
    message: '크리스마스를 맞이하여 스페셜 질문이 도착했습니다.\n지금 답변해볼까요?',
  },
};
