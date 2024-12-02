export const formatTime = (dateString: string) => {
  const now = new Date();
  const commentDate = new Date(dateString);
  const diffInHours = Math.floor((now.getTime() - commentDate.getTime()) / (1000 * 60 * 60));

  if (diffInHours < 1) {
    const diffInMinutes = Math.floor((now.getTime() - commentDate.getTime()) / (1000 * 60));
    return `${diffInMinutes}분 전`;
  }
  if (diffInHours < 24) {
    return `${diffInHours}시간 전`;
  }
  const diffInDays = Math.floor(diffInHours / 24);
  return `${diffInDays}일 전`;
};
