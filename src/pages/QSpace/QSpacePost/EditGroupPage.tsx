import LoadingSpinner from '@/components/ui/LoadingSpinner/LoadingSpinner';
import { useGroupDetail } from '@/pages/QSpace/hooks/Query/useGroupDetail';
import PostGroupPage from '@/pages/QSpace/QSpacePost/PostGroupPage';
import { useParams } from 'react-router';

const EditGroupPage = () => {
  const { groupId } = useParams();
  const { data: groupDetail, isPending } = useGroupDetail(Number(groupId));

  if (isPending) return <LoadingSpinner />;
  if (!groupDetail) return <div>그룹을 찾을 수 없습니다</div>;

  return <PostGroupPage mode="edit" initialData={groupDetail} />;
};

export default EditGroupPage;
