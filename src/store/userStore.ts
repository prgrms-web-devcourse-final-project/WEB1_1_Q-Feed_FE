import { User } from '@/types/user';
import { create } from 'zustand';

export const useUserStore = create<User>((set) => ({
  userId: null,
  setUserId: (userId) => set({ userId }),
  clearUserId: () => set({ userId: null }),
}));
