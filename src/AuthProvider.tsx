import React, { createContext, useState } from 'react';
import type { User } from './types';

type AuthState =
  | ({
      token: string | null;
    } & User)
  | null;

type AuthContextType = [
  AuthState,
  React.Dispatch<React.SetStateAction<AuthState>>
];
/*eslint-disable*/
export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

const AuthProvider = ({ children }: React.PropsWithChildren) => {
  const [data, setData] = useState<AuthState>(null);

  return (
    <AuthContext.Provider value={[data, setData]}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
