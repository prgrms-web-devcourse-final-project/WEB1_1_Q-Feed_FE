import LoadingSpinner from '@/components/ui/LoadingSpinner/LoadingSpinner';
import { useGroupDetail } from '@/pages/QSpace/hooks/Query/useGroupDetail';
import PostGroupPage from '@/pages/QSpace/QSpacePost/PostGroupPage';
import { useLocation } from 'react-router';

const EditGroupPage = () => {
  const location = useLocation();
  const groupId = location.state?.groupId;
  const { data: groupDetail, isPending } = useGroupDetail(groupId);

  if (isPending) return <LoadingSpinner />;
  if (!groupDetail) return <div>그룹을 찾을 수 없습니다</div>;

  return <PostGroupPage mode="edit" initialData={groupDetail} />;
};

export default EditGroupPage;
