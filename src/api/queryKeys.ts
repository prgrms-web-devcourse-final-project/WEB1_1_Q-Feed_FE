export type GroupKeys = typeof GROUP_KEYS;
export type UserKeys = typeof USER_KEYS;
export type NotificationKeys = typeof NOTIFICATION_KEYS;

export const GROUP_KEYS = {
  ROOT: 'groups',
  ACTIONS: {
    LIST: 'list',
    DETAIL: 'detail',
    ACTIVITIES: 'activities',
  },
} as const;

export const USER_KEYS = {
  ROOT: 'users',
  ACTIONS: {
    DETAIL: 'detail',
    GROUPS: 'groups',
  },
} as const;

export const NOTIFICATION_KEYS = {
  ROOT: 'notifications',
  ACTIONS: {
    UNREAD: 'unread',
  },
} as const;
