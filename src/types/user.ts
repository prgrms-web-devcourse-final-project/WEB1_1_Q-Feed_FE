export interface User {
  userId: string | null;
  setUserId: (userId: string) => void;
  clearUserId: () => void;
}
