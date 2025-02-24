import { Group } from '@/pages/QSpace/types/group';
import { formatLastUpdated } from '@/utils/formatLastUpdated';

export const getQSpaceCard = (group: Group) => ({
  groupId: group.groupId,
  imageUrl: group.url,
  title: group.groupName,
  description: group.description,
  memberCount: group.membersCount,
  isRecruiting: group.isOpen,
  lastUpdated: formatLastUpdated(group.createdAt),
});
