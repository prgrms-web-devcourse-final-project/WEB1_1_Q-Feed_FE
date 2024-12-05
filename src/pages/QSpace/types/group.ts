export interface Group {
  groupId: number;
  url: string;
  groupName: string;
  description: string;
  isOpen: boolean;
  createdAt: string;
  membersCount: number;
}

export interface CreateGroupRequest {
  groupName: string;
  description: string;
  categoryId: number;
  url: string;
  isOpen: true;
}

export interface UpdateGroupRequest extends Partial<CreateGroupRequest> {
  groupId: number;
}
