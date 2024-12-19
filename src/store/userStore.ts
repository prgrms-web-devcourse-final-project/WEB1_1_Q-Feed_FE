import { create } from 'zustand';
import { User } from '@/types/user';

export const useUserStore = create<User>((set) => ({
  userId: null,
  setUserId: (userId: string) => {
    set({ userId });
  },
  clearUserId: () => {
    set({ userId: null });
  },
}));
