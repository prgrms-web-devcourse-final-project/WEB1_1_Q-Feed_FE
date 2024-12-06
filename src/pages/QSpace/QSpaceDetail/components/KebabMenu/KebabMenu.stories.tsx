import type { Meta, StoryObj } from '@storybook/react';
import KebabMenu from './KebabMenu';

const meta: Meta<typeof KebabMenu> = {
  title: 'Components/KebabMenu',
  component: KebabMenu,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '그룹 상세 페이지에서 사용되는 메뉴 컴포넌트입니다. 수정 및 삭제 기능을 제공합니다.',
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ padding: '2rem', background: '#f5f5f5', height: '200px' }}>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Story />
        </div>
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof KebabMenu>;

export const Default: Story = {
  args: {
    onEditClick: () => {
      console.log('Edit clicked');
    },
    onDeleteClick: () => {
      console.log('Delete clicked');
    },
  },
  parameters: {
    docs: {
      description: {
        story: '기본적인 케밥 메뉴입니다. 수정과 삭제 버튼이 포함되어 있습니다.',
      },
    },
  },
};
