import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import AuthLayout from '../components/auth/AuthLayout';
import { AccessToken } from '../variables/authVariable';

export default function Register() {
  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem(AccessToken);
    const { push } = router;
    if (token) {
      push('/');
    }
  }, [router]);
  return <AuthLayout />;
}
