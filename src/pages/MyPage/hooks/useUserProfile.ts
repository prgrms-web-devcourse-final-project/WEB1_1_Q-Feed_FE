import { useQuery } from '@tanstack/react-query';
import { fetchUserProfile, fetchUserInterests } from '../api/fetchUserProfile';
import { UserProfile } from '../types/profile';

export const useUserProfile = (userId: string) => {
  return useQuery<UserProfile | undefined>({
    queryKey: ['userProfile', userId],
    queryFn: () => fetchUserProfile(userId),
    enabled: !!userId,
  });
};

export const useUserInterests = (userId: string) => {
  return useQuery<string[] | undefined>({
    queryKey: ['userInterests', userId],
    queryFn: () => fetchUserInterests(userId),
    enabled: !!userId,
  });
};
