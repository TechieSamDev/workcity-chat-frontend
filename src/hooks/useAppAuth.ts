import { AuthContext } from '@/AuthProvider';
import { useContext } from 'react';

const useAppAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAppAuth must be used within an AuthProvider');
  return ctx;
};

export default useAppAuth;
