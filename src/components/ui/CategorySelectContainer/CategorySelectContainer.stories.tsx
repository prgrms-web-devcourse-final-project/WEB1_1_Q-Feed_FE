import type { Meta, StoryObj } from '@storybook/react';
import CategorySelectContainer from './CategorySelectContainer';

const meta = {
  title: 'Components/ui/CategorySelectContainer',
  component: CategorySelectContainer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CategorySelectContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onCategorySelect: (categoryId) => console.log('Selected category:', categoryId),
  },
};

export const WithBackground: Story = {
  decorators: [
    (Story) => (
      <div
        style={{
          background: '#F3EBE0',
          padding: '2rem',
          maxWidth: '430px',
        }}
      >
        <Story />
      </div>
    ),
  ],
};
