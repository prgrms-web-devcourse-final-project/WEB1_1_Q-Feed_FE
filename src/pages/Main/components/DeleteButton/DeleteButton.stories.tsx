import { DeleteButton } from '@/pages/Main/components/DeleteButton/DeleteButton';
import { Meta, StoryFn } from '@storybook/react';

type DeleteButtonProps = {
  onClick?: () => void;
};

// 스토리 메타데이터 정의
const meta: Meta<typeof DeleteButton> = {
  title: 'Pages/Main/Components/DeleteButton',
  component: DeleteButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'DeleteButton은 답글을 삭제할 때 사용하는 버튼 컴포넌트입니다.',
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

const Template: StoryFn<DeleteButtonProps> = (args) => <DeleteButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  onClick: () => alert('Delete button clicked!'), // 예제 클릭 핸들러
};
