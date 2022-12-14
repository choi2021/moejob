import { signOut } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  background-color: ${(props) => props.theme.colors.white};
  height: 3rem;
  border-bottom: gray 1px solid;
  z-index: 800;
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
  const onSignOut = async () => {
    const data = await signOut({ redirect: false, callbackUrl: '/login' });
    push(data.url);
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
