import type { Meta, StoryObj } from '@storybook/react';
import FloatingButton from './FloatingButton';
const meta = {
  title: 'Components/QSpaceMain/FloatingButton',
  component: FloatingButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onClick: {
      action: 'clicked',
      description: '버튼 클릭 시 실행될 함수입니다.',
    },
  },
} satisfies Meta<typeof FloatingButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 상태
export const Default: Story = {
  args: {},
};

// 컨텍스트 내 사용 예시
export const InContext: Story = {
  decorators: [
    (Story) => (
      <div
        style={{
          position: 'relative',
          width: '300px',
          height: '500px',
          border: '1px solid #ccc',
          borderRadius: '8px',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            padding: '20px',
            height: '100%',
            background: '#f5f5f5',
          }}
        >
          <h3>Sample Content Area</h3>
          <p>Scroll or interact with the floating button below.</p>
        </div>
        <Story />
      </div>
    ),
  ],
};
