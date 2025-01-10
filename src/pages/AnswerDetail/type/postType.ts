export interface PostComments {
  answerId: number;
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

// const mapToPostComments = (apiResponse: any): PostComments => ({
//   commentId: apiResponse.id,
//   userId: apiResponse.user.id,
//   authorNickname: apiResponse.user.nickname,
//   profileImage: apiResponse.user.profileImage || '',
//   content: apiResponse.content,
//   likeCount: apiResponse.likeCount || 0,
//   createdAt: apiResponse.createdAt,
//   isLike: apiResponse.isLiked || false,
//   isFollowing: apiResponse.isFollowing || false,
//   childCommentCount: apiResponse.childCommentCount || 0,
//   children: apiResponse.children?.map(mapToPostComments) || [],
// });
