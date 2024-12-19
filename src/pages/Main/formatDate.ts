export const formatDate = (isoDateString: string): string => {
  try {
    const date = new Date(isoDateString);
    return date
      .toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      })
      .replace(/\./g, '/');
  } catch (error) {
    console.error('Invalid date format', error);
    return isoDateString; // 변환 실패 시 원본 문자열 반환
  }
};
