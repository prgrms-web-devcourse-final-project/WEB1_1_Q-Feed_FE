export type GroupKeys = typeof GROUP_KEYS;
export type UserKeys = typeof USER_KEYS;
export type NotificationKeys = typeof NOTIFICATION_KEYS;
export type AuthKeys = typeof AUTH_KEYS;

export const GROUP_KEYS = {
  ROOT: 'groups',
  ACTIONS: {
    LIST: 'list',
    DETAIL: 'detail',
    ACTIVITIES: 'activities',
  },
  CATEGORIES: {
    ALL: 0,
    TRAVEL: 1,
    SPORTS: 2,
    FASHION: 3,
    CULTURE: 4,
    FOOD: 5,
    OTHER: 6,
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

export const AUTH_KEYS = {
  ROOT: 'auth',
  ACTIONS: {
    LOGIN: 'login',
    LOGOUT: 'logout',
    REGISTER: 'register',
    REFRESH: 'refresh',
  },
} as const;
