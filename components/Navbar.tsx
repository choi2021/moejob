import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';
import { useAuth } from '../context/AuthContext';
import { AccessToken } from '../variables/authVariable';

const Wrapper = styled.nav`
  border-bottom: gray 1px solid;
`;

const Layout = styled.nav`
  margin: auto;
  max-width: 1000px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 3rem;
  padding: 1rem;
  a {
    font-size: 1.6rem;
    font-weight: bold;
    color: lightcoral;
  }
`;

const Btns = styled.div`
  display: flex;
  align-items: center;
  button {
    font-weight: bold;
    padding: 0.5rem;
    &:hover {
      color: lightcoral;
    }
  }
`;

export default function Navbar() {
  const { push } = useRouter();
  const authService = useAuth();
  const onSignOut = () => {
    authService
      .signOut()
      .then(() => {
        localStorage.removeItem(AccessToken);
        push('/login');
      })
      .catch((error) => console.log(error));
  };
  return (
    <Wrapper>
      <Layout>
        <Link href="/">모으잡</Link>
        <Btns>
          <button onClick={onSignOut}>로그아웃</button>
        </Btns>
      </Layout>
    </Wrapper>
  );
}
