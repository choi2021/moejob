import { createContext, useContext, useState, useEffect } from 'react';
import React from 'react';
import { AuthService } from '../types/Authtypes';
import { User } from 'firebase/auth';
import Router, { useRouter } from 'next/router';

type AuthProviderProps = {
  children: React.ReactNode;
  authService: AuthService;
};

type InitialValue = {
  authService: AuthService;
  user: User | null;
};

const AuthContext = createContext<InitialValue | null>(null);
export const AuthProvider = ({ children, authService }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    authService.onUserStateChanged((user) => {
      setUser(user);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user, authService }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthService = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('Not under AuthProvider');
  }
  return context;
};
