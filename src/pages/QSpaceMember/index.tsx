import BackButton from '@/components/ui/BackButton/BackButton';
import MemberList from './components/MemberList/MemberList';
import { ContentContainer, Header, HeaderTitle, PageContainer } from '@/pages/QSpaceMember/styles';

const MOCK_MEMBERS = [
  {
    id: '1',
    name: '백종원',
    role: '프로필 소개글',
    profileImage: undefined,
  },
  {
    id: '2',
    name: '백종원',
    role: '프로필 소개글',
    profileImage: undefined,
  },
  {
    id: '3',
    name: '백종원',
    role: '프로필 소개글',
    profileImage: undefined,
  },
  {
    id: '4',
    name: '백종원',
    role: '프로필 소개글',
    profileImage: undefined,
  },
  {
    id: '5',
    name: '백종원',
    role: '프로필 소개글',
    profileImage: undefined,
  },
];

const QSpaceMemberPage = () => {
  const handleResign = (memberId: string) => {
    console.log('Member resigned:', memberId);
  };

  return (
    <PageContainer>
      <Header>
        <BackButton />
        <HeaderTitle>멤버 목록</HeaderTitle>
      </Header>
      <ContentContainer>
        <MemberList members={MOCK_MEMBERS} onResign={handleResign} />
      </ContentContainer>
    </PageContainer>
  );
};

export default QSpaceMemberPage;
