import { Session } from 'next-auth';

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

export type Providers = {
  [index: string]: Provider;
};

export type Provider = {
  callbackUrl: string;
  id: string;
  name: string;
  type: string;
  signinUrl: string;
};

export type User = Session['user'];
