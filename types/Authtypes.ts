import { User, UserCredential } from 'firebase/auth';
import { Dispatch, SetStateAction } from 'react';

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
  logIn: (email: string, password: string) => Promise<UserCredential>;
  signUp: (email: string, password: string) => Promise<UserCredential>;
  OAuthSignIn: (platfrom: OAuthType) => Promise<UserCredential>;
  logOut: () => Promise<void>;
  onUserStateChanged: (callback: Dispatch<SetStateAction<User | null>>) => void;
}

export type ConfigType = {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  appId: string;
  measurementId: string;
};

type ErrorDetail = {
  message: string;
  domain: string;
  reason: string;
};

export type ErrorType = {
  code: number;
  errors: ErrorDetail[];
  message: string;
};
