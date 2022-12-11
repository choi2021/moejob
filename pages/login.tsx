import { useRouter } from 'next/router';
import React from 'react';
import AuthLayout from '../components/auth/AuthLayout';
import { useAuthService } from '../context/AuthContext';

export default function Login() {
  return <AuthLayout />;
}
