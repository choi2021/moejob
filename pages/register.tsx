import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import AuthLayout from '../components/auth/AuthLayout';

export default function Register() {
  const router = useRouter();

  return <AuthLayout />;
}
