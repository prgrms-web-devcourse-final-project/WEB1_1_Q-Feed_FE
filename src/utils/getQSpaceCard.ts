import { QSpaceCardProps } from '@/types/qCard';
import { formatLastUpdated } from '@/utils/formatLastUpdated';
import { Group } from '@/pages/QSpace/types/group';

export const getQSpaceCard = (group: Group): QSpaceCardProps => {
  return {
    key: group.groupId,
    imageUrl: group.url,
    title: group.groupName,
    description: group.description,
    memberCount: group.membersCount,
    isRecruiting: group.isOpen,
    lastUpdated: formatLastUpdated(group.createdAt),
  };
};
