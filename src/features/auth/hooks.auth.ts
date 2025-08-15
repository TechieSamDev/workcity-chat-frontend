import { useMutation, useQuery } from '@tanstack/react-query';
import { getSession, login, signup } from './services.auth';

export const useLogin = () =>
  useMutation({
    mutationFn: login,
  });

export const useSignup = () =>
  useMutation({
    mutationFn: signup,
  });

export const useSession = (token: string) =>
  useQuery({
    retry: false,
    queryKey: ['session'],
    queryFn: () => getSession(token),
  });
