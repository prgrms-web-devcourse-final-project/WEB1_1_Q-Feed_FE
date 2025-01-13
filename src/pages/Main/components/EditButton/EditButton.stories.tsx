import { Meta, StoryFn } from '@storybook/react';
import { EditButton } from '@/pages/Main/components/EditButton/EditButton';

type EditButtonProps = {
  alt?: string;
  onClick?: () => void;
};

const meta: Meta<typeof EditButton> = {
  title: 'Pages/Main/Components/EditButton',
  component: EditButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'EditButton은 답글을 수정할 때 사용하는 버튼 컴포넌트입니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    onClick: {
      description: '버튼이 클릭되었을 때 호출되는 이벤트 핸들러입니다.',
    },
  },
};

export default meta;

const Template: StoryFn<EditButtonProps> = (args) => <EditButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  onClick: () => alert('Edit button clicked!'), // 예제 클릭 핸들러
};
