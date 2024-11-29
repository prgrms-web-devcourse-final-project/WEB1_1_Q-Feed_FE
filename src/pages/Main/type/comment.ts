export interface Author {
  name: string;
  profileImage: string;
}

export interface Comment {
  id: string;
  author: Author;
  content: string;
  createdAt: string;
  likes: number;
  isLiked: boolean;
  replyCount: number;
}
