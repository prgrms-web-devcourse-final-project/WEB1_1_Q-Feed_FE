export const GROUPS = 'groups' as const;
export const USERS = 'users' as const;
export const NOTIFICATIONS = 'notifications' as const;

export const queries = {
  groups: {
    DEFAULT: [GROUPS],
    list: (category: string, showOnlyRecruiting: boolean) => [
      GROUPS,
      'list',
      { category, showOnlyRecruiting },
    ],
    detail: (groupId: string) => [GROUPS, 'detail', groupId],
    activities: (groupId: string) => [GROUPS, groupId, 'activities'],
  },

  users: {
    DEFAULT: [USERS],
    detail: (userId: string) => [USERS, userId],
    groups: (userId: string) => [USERS, userId, 'groups'],
  },

  notifications: {
    DEFAULT: [NOTIFICATIONS],
    unread: () => [NOTIFICATIONS, 'unread'],
  },
} as const;
