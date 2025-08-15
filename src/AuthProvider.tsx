import React, { createContext, useState } from 'react';
import type { User } from './types';

type AuthState = {
  user: User | null;
  token: string | null;
};

type AuthContextType = [
  AuthState,
  React.Dispatch<React.SetStateAction<AuthState>>
];
/*eslint-disable*/
export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

const AuthProvider = ({ children }: React.PropsWithChildren) => {
  const [data, setData] = useState<AuthState>({ user: null, token: null });

  return (
    <AuthContext.Provider value={[data, setData]}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
