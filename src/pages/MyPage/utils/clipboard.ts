export const copyToClipboard = (text: string): void => {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      alert('링크가 복사되었습니다!');
    })
    .catch((err) => {
      console.error('복사 실패:', err);
      alert('링크 복사에 실패했습니다.');
    });
};
