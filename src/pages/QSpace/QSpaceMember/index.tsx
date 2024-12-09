import { useParams } from 'react-router-dom';

import BackButton from '@/components/ui/BackButton/BackButton';
import LoadingSpinner from '@/components/ui/LoadingSpinner/LoadingSpinner';
import { useUserStore } from '@/store/userStore';

import { useMemberList } from '@/pages/QSpace/hooks/Query/useMemberList';
import MemberList from '@/pages/QSpace/QSpaceMember/components/MemberList/MemberList';

import { ContentContainer, Header, HeaderTitle, PageContainer } from './styles';
import { useRemoveMember } from '@/pages/QSpace/hooks/Mutation/useRemoveMember';

const QSpaceMemberPage = () => {
  const { groupId } = useParams();
  const { userId } = useUserStore();
  const groupIdNumber = Number(groupId);

  const { data: members, isPending } = useMemberList(groupIdNumber);
  const removeMemberMutation = useRemoveMember(groupIdNumber);

  const handleResign = async (memberId: number) => {
    if (window.confirm('정말로 이 멤버를 퇴장시키시겠습니까?')) {
      await removeMemberMutation.mutateAsync(memberId);
    }
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
          isLoading={removeMemberMutation.isPending}
        />
      </ContentContainer>
    </PageContainer>
  );
};

export default QSpaceMemberPage;
