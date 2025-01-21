import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type UserStore = {
  userId: string | null;
  setUserId: (userId: string) => void;
  clearUserId: () => void;
};

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      userId: null,
      setUserId: (userId: string) => set({ userId }),
      clearUserId: () => set({ userId: null }),
    }),
    {
      name: 'user-store',
    }
  )
);
