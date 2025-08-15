import { useMutation } from '@tanstack/react-query';
import { login, signup } from './services.auth';

export const useLogin = () =>
  useMutation({
    mutationFn: login,
  });


export const useSignup = () =>
  useMutation({
    mutationFn: signup,
  });
