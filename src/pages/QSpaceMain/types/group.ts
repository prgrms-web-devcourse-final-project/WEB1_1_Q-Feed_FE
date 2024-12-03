export interface Group {
  groupId: string;
  url: string;
  groupName: string;
  description: string;
  is_open: boolean;
  createdAt: string;
  membersCount: number;
}

export interface GroupResponse {
  groups: Group[];
}

export interface GroupFilterState {
  activeCategory: string;
  showOnlyRecruiting: boolean;
}
