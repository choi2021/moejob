import React from 'react';
import AuthLayout from '../components/auth/AuthLayout';
import { withPublic } from './../components/ProtectedRoute';

function Login() {
  return <AuthLayout />;
}

export default withPublic(Login);
