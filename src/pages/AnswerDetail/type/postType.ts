export interface PostComments {
  commentId: number;
  userId: string;
  authorNickname: string;
  profileImage: string;
  content: string;
  likeCount: number;
  createdAt: string;
  isLike: boolean;
  isFollowing: boolean;
  childCommentCount: number;
  children: PostComments[];
}

export interface PostDetail {
  answerId: number;
  authorUserId: string;
  authorNickname: string;
  profileImage: string;
  content: string;
  createdAt: string;
  likeCount: number;
  isLike: boolean;
  isFollowing: boolean;
  commentCount: number;
  comments: PostComments[];
}

export interface TodayQuestion {
  questionId: number;
  content: string;
  createdAt: string;
}

export interface Comment {
  answerId: string;
  author: { name: string; profileImage: string };
  content: string;
  createdAt: string;
  likeCount: number;
  isLike: boolean;
  replyCount: number;
}
