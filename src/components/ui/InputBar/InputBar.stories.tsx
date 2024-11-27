import SearchInput from '@/components/ui/InputBar/InputBar';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof SearchInput> = {
  title: 'Components/ui/SearchInput', // Storybook 내에서 컴포넌트가 표시될 경로
  component: SearchInput,
  argTypes: {
    placeholder: {
      control: 'text',
      description: '검색창 플레이스홀더 텍스트',
    },
    onSearch: {
      action: 'searched',
      description: 'Enter 키나 아이콘 클릭 시 실행되는 검색 이벤트',
    },
  },
  parameters: {
    docs: {
      description: {
        component: '검색어를 입력하고 Enter 키를 누르거나 돋보기 아이콘을 클릭하여 검색할 수 있는 입력 컴포넌트입니다.',
      },
    },
  },
};

export default meta;

// 스토리 정의
type Story = StoryObj<typeof SearchInput>;

// 기본 스토리
export const Default: Story = {
  args: {
    placeholder: '사용자의 닉네임을 검색해보세요.',
  },
};

// 커스텀 플레이스홀더 스토리
export const CustomPlaceholder: Story = {
  args: {
    placeholder: '검색어를 입력하세요...',
  },
};

// 검색 이벤트 스토리
export const WithSearchCallback: Story = {
  args: {
    placeholder: '검색 후 Enter를 눌러보세요.',
    onSearch: (value: string) => {
      console.log('검색어:', value);
    },
  },
};
