export interface Author {
  name: string;
  profileImage: string;
}

export interface Comment {
  commentId: string;
  author: Author;
  content: string;
  createdAt: string;
  likeCount: number;
  isLike: boolean;
  replyCount: number;
  comments?: Comment[];
  parentId?: string;
}
