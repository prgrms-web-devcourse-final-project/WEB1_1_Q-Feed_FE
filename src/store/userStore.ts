import { create } from 'zustand';
import { UserState } from '@/pages/QSpace/types/userState';

interface UserStore extends UserState {
  setUser: (user: Omit<UserState, 'isLoggedIn'>) => void;
  logout: () => void;
}

export const useUserStore = create<UserStore>((set) => ({
  userId: null,
  isLoggedIn: false,
  profile: null,
  setUser: (user) => set({ ...user, isLoggedIn: true }),
  logout: () => set({ userId: null, isLoggedIn: false, profile: null }),
}));
