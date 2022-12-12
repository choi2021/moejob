import { useRouter } from 'next/router';
import React, { ComponentType } from 'react';
import { useAuthService } from '../context/AuthContext';
export function withPublic<T>(Component: ComponentType<T>) {
  return function WithPublic(props: T) {
    const auth = useAuthService();
    const router = useRouter();
    if (auth.user) {
      router.replace('/');
      return <h1>Route</h1>;
    }
    return <Component auth={auth} {...props} />;
  };
}

export function withProtected<T>(Component: React.ComponentType<T>) {
  return function WithProtected(props: T) {
    const auth = useAuthService();
    const router = useRouter();
    if (!auth.user) {
      router.replace('/login');
      return <h1>Route</h1>;
    }
    return <Component auth={auth} {...props} />;
  };
}
