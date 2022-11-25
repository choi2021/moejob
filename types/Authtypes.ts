import { UserCredential } from 'firebase/auth';

export type ActionType =
  | { type: 'SET_EMAIL'; data: string }
  | { type: 'SET_PASSWORD'; data: string };

export type UserInfoType = {
  email: string;
  password: string;
  emailValid: boolean;
  passwordValid: boolean;
};

export type PlatformType = 'google' | 'github';

export interface AuthService {
  signIn: (email: string, password: string) => Promise<UserCredential>;
  signUp: (email: string, password: string) => Promise<UserCredential>;
  OAuthSignIn: (platfrom: PlatformType) => Promise<UserCredential>;
  signOut: () => Promise<void>;
}

export type ConfigType = {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  appId: string;
  measurementId: string;
};
