import React from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import { withPublic } from './../components/ProtectedRoute';

function Login() {
  const { data: session } = useSession();
  console.log(session);
  if (session) {
    return (
      <div>
        <p>Welcome, {session.user.email}</p>
        <img src={session.user.image} alt="image" />
        <button onClick={() => signOut()}>Sign Out</button>
      </div>
    );
  } else {
    return (
      <div>
        <p>You are not signed in</p>
        <button onClick={() => signIn()}>sign IN</button>
      </div>
    );
  }
  // return <AuthLayout />;
}

export default withPublic(Login);
