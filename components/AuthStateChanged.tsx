import React, { useEffect, useState } from 'react';
import { useAuthService } from '../context/AuthContext';

export default function AuthStateChanged({
  children,
}: {
  children: React.ReactNode;
}) {
  const { authService, setUser } = useAuthService();

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    authService.onUserStateChanged((user) => {
      setUser(user);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <h1>로딩 중</h1>;
  }

  return <>{children}</>;
}
