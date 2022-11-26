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

export type OAuthType = 'google' | 'github';

export interface AuthService {
  signIn: (email: string, password: string) => Promise<UserCredential>;
  signUp: (email: string, password: string) => Promise<UserCredential>;
  OAuthSignIn: (platfrom: OAuthType) => Promise<UserCredential>;
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
