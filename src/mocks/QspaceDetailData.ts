export const mockDiscussionData = {
  isCreator: true,
  discussion: {
    title: '제주도 맛집 토론방',
    creator: '맛집탐방자네트워크',
    profileImage: 'https://via.placeholder.com/40',
    content:
      '제주도의 숨은 맛집 얘기해요!\n로컬 주민 및 상생 등등 어쩌구저쩌구\n제주도의 숨은 맛집 얘기해요!',
    memberCount: 27,
    lastChatTime: new Date(),
    isRecruiting: true,
  },
  comments: [
    {
      id: '1',
      author: {
        name: '정주연',
        profileImage: 'https://via.placeholder.com/40',
      },
      content:
        '분위기를 많이 보는 것 같아요. 가게 분위기나 인테리어 같은? 분위기를 많이 보는 것...',
      createdAt: new Date().toISOString(),
      likes: 16,
      isLiked: false,
      replyCount: 20,
    },
    {
      id: '2',
      author: {
        name: '강지수',
        profileImage: 'https://via.placeholder.com/40',
      },
      content: '맞아요! 분위기도 중요하지만 음식이 더 중요한 것 같아요.',
      createdAt: new Date(Date.now() - 3600000).toISOString(), // 1시간 전
      likes: 8,
      isLiked: true,
      replyCount: 5,
    },
    {
      id: '3',
      author: {
        name: '김현우',
        profileImage: 'https://via.placeholder.com/40',
      },
      content: '제주도 흑돼지는 진짜 맛있더라구요! 추천하고 싶은 곳이 있는데...',
      createdAt: new Date(Date.now() - 7200000).toISOString(), // 2시간 전
      likes: 12,
      isLiked: false,
      replyCount: 15,
    },
  ],
};
