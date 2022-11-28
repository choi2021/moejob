import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import AuthLayout from '../components/auth/AuthLayout';
import { AccessToken } from '../variables/authVariable';

export default function Login() {
  const { push } = useRouter();
  useEffect(() => {
    const token = localStorage.getItem(AccessToken);
    if (token) {
      push('/');
    }
  }, []);
  return <AuthLayout />;
}
