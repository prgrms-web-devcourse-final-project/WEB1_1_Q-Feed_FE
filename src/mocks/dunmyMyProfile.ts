export const dummyProfile = {
  name: '정주연',
  id: 'juyeon123',
  followers: 16,
  following: 23,
  bio: '숨은 맛집을 찾아다니는 주연씨입니다!',
  profileImage: 'https://via.placeholder.com/100',
  tags: ['여행', '패션', '맛집'],
  answers: [
    { post: '나는 국내 여행으로도 만족이야', src: null },
    {
      post: '따끈한 일본 온천으로 놀러가고싶어',
      src: 'https://cdn.traveltimes.co.kr/news/photo/202411/410169_35552_1437.jpg',
    },
    {
      post: '여행은 무슨 집이 최고야야',
      src: 'https://i.namu.wiki/i/_VR5WHEDuh8GTDefHS5Q9hRraEwIEwHVMMFNwzr3uDAgXeQ-2ht67CM8tj4KtttckiCj7-VOdzeOQnpSz7ks8w.webp',
    },
    {
      post: '태국 망고 먹고싶어',
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrSHVl8viXH3OPR1UyFBqVdeF80pdytyDieQ&s',
    },
    {
      post: '대만가서 딤섬 먹고싶다',
      src: 'https://i.namu.wiki/i/VJ3wVc3XFU2ksCFrU3TFUeG4vpB6SG0MivSNHN3jRM2SuAaM5MD018FNBV3QKQj9mKsvzL3Dnu17M0g_z35Wdg.webp',
    },
    {
      post: '라스베가스에 가서 잭팟을 노리겠어',
      src: 'https://static.hanatour.com/product/2019/02/01/0055e0rtfv/default.jpg',
    },
  ],
};

export const dummyQuestions = [
  { id: 1, date: '2024.11.15', content: '맛집을 고르는 기준은 무엇인가요?', isPrivate: true },
  { id: 2, date: '2024.11.15', content: '가장 좋아하는 운동은 무엇인가요?', isPrivate: false },
  { id: 3, date: '2024.11.15', content: '가장 기억에 남는 여행지는?', isPrivate: true },
];

export const dummyQSpaces = [
  {
    imageUrl: 'https://via.placeholder.com/150',
    title: '제주도 맛집 토론방',
    description: '제주의 숨은 맛집 이야기해요!',
    memberCount: 133,
    isRecruiting: true,
    lastUpdated: '방금 전 게시',
  },
  {
    imageUrl: 'https://via.placeholder.com/150',
    title: '서울 카페 탐방',
    description: '서울의 멋진 카페를 공유해요!',
    memberCount: 87,
    isRecruiting: false,
    lastUpdated: '3일 전 게시',
  },
];