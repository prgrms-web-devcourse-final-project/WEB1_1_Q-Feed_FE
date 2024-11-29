// ProfileCard.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { ProfileCard } from './ProfileCard';
import { action } from '@storybook/addon-actions';

const meta: Meta<typeof ProfileCard> = {
  title: 'Pages/Main/components/ProfileCard',
  component: ProfileCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    componentSubtitle: '사용자 프로필을 표시하는 카드 컴포넌트',
    docs: {
      description: {
        component: '프로필 이미지, 이름, 팔로워 정보를 보여주고 팔로우 기능을 제공하는 카드입니다.'
      }
    }
  },
  argTypes: {
    name: {
      description: '사용자의 이름',
      control: 'text'
    },
    imgsrc: {
      description: '프로필 이미지 URL',
      control: 'text'
    },
    followerName: {
      description: '첫 번째 팔로워의 이름',
      control: 'text'
    },
    followerNum: {
      description: '전체 팔로워 수',
      control: 'number'
    },
    onClickClose: {
      description: '닫기 버튼 클릭 핸들러',
      action: 'close clicked'
    },
    onClickFollow: {
      description: '팔로우 버튼 클릭 핸들러',
      action: 'follow clicked'
    }
  }
};

export default meta;
type Story = StoryObj<typeof ProfileCard>;

export const Default: Story = {
  args: {
    name: '홍길동',
    followerName: '김철수',
    followerNum: 5,
    imgsrc: 'https://i.pinimg.com/236x/8c/8e/00/8c8e00ad73564a11ebd79420fdc58a8a.jpg',
    onClickClose: action('close clicked'),
    onClickFollow: action('follow clicked'),
  },
  parameters: {
    docs: {
      description: {
        story: '기본적인 프로필 카드의 모습을 보여줍니다.'
      }
    }
  }
};

export const LongName: Story = {
  args: {
    name: '매우매우매우매우긴이름을가진사용자',
    followerName: '김철수',
    followerNum: 10,
    imgsrc: 'https://i.pinimg.com/236x/fe/5c/9e/fe5c9ecee03c6eb1cc967ee875702110.jpg',
    onClickClose: action('close clicked'),
    onClickFollow: action('follow clicked'),
  },
  parameters: {
    docs: {
      description: {
        story: '긴 이름이 있을 경우 말줄임표(...)로 처리되는 것을 보여줍니다.'
      }
    }
  }
};

export const NoImage: Story = {
  args: {
    name: '이미지없음',
    followerName: '김철수',
    followerNum: 3,
    onClickClose: action('close clicked'),
    onClickFollow: action('follow clicked'),
  },
  parameters: {
    docs: {
      description: {
        story: '프로필 이미지가 없는 경우의 표시 상태를 보여줍니다.'
      }
    }
  }
};

export const ManyFollowers: Story = {
  args: {
    name: '인기사용자',
    followerName: '김철수',
    followerNum: 999,
    imgsrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUgVOwWlh1WRRPqQb8dClqToomBat9tKcE9_CRtRUouBbqB6YCDhVrFNVZ0Hzpm8klwIA&usqp=CAU',
    onClickClose: action('close clicked'),
    onClickFollow: action('follow clicked'),
  },
  parameters: {
    docs: {
      description: {
        story: '많은 수의 팔로워가 있는 경우를 보여줍니다.'
      }
    }
  }
};