import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { BsPencil } from 'react-icons/bs';
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
    margin-right: 0.5rem;
    font-weight: bold;
    padding: 0.5rem;
    &:hover {
      color: lightcoral;
    }
  }
`;

const PATH = {
  HOME: 'home',
  USER: 'user',
  LOGIN: 'login',
  ADMIN: 'admin',
  LOGOUT: 'logout',
} as const;

export default function Navbar() {
  const { push } = useRouter();
  const { data: session } = useSession();
  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = e.currentTarget;
    let url;
    switch (name) {
      case PATH.HOME:
        url = `/`;
        break;
      case PATH.USER:
        url = `/user`;
        break;
      case PATH.ADMIN:
        url = `/admin`;
        break;
      case PATH.LOGIN:
        url = '/login';
        break;
      case PATH.LOGOUT:
        await signOut({ redirect: false, callbackUrl: '/login' });
        return;
      default:
        throw new Error(`Wrong name clicked`);
    }
    push(url);
  };
  return (
    <Wrapper>
      <Layout>
        <Link href="/">모으잡</Link>
        <Btns>
          <button name="home" onClick={handleClick}>
            홈
          </button>
          <button name="user" onClick={handleClick}>
            모은 공고
          </button>
          <button name="admin" onClick={handleClick}>
            <BsPencil />
          </button>
          {session && (
            <button name="logout" onClick={handleClick}>
              로그아웃
            </button>
          )}
          {!session && (
            <button name="login" onClick={handleClick}>
              로그인
            </button>
          )}
        </Btns>
      </Layout>
    </Wrapper>
  );
}
