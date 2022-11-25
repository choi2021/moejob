import { createContext, useContext } from 'react';
import React from 'react';
import { AuthService } from '../types/Authtypes';

interface AuthProviderProps {
  children: React.ReactNode;
  authService: AuthService;
}

const AuthContext = createContext<AuthService | null>(null);
export const AuthProvider = ({ children, authService }: AuthProviderProps) => {
  return (
    <AuthContext.Provider value={authService}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('Not under AuthProvider');
  }
  return context;
};
