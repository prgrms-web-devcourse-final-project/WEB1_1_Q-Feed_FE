import { useParams } from 'react-router-dom';

import BackButton from '@/components/ui/BackButton/BackButton';
import LoadingSpinner from '@/components/ui/LoadingSpinner/LoadingSpinner';
import { useUserStore } from '@/store/userStore';

import { useMemberList } from '@/pages/QSpace/hooks/useMemberList';
import MemberList from '@/pages/QSpace/QSpaceMember/components/MemberList/MemberList';

import { ContentContainer, Header, HeaderTitle, PageContainer } from './styles';

const QSpaceMemberPage = () => {
  const { groupId } = useParams();
  const { userId } = useUserStore();
  const groupIdNumber = Number(groupId);

  const { data: members, isPending } = useMemberList(groupIdNumber);

  const handleResign = (memberId: number) => {
    // 탈퇴 로직 구현 예정
    console.log('Member resigned:', memberId);
  };

  if (isPending) {
    return <LoadingSpinner />;
  }

  return (
    <PageContainer>
      <Header>
        <BackButton />
        <HeaderTitle>멤버 목록</HeaderTitle>
      </Header>
      <ContentContainer>
        <MemberList
          members={members || []}
          adminId={members?.[0]?.userId || ''}
          currentUserId={userId || ''}
          onResign={handleResign}
        />
      </ContentContainer>
    </PageContainer>
  );
};

export default QSpaceMemberPage;
