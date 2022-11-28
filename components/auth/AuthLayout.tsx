import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';
import SEO from '../SEO';
import AuthForm from './AuthForm/AuthForm';
import AuthPlatform from './AuthPlatform';

const Wrapper = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f7f7f7;
`;

const Layout = styled.main`
  background-color: white;
  max-width: 400px;
  height: 88%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem 2rem;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 2rem;

  h1,
  h2 {
    font-weight: bold;
  }
  h1 {
    font-size: 1.6rem;
    color: ${(props) => props.theme.colors.mainColor};
    margin-bottom: 1rem;
  }
  h2 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }
  p {
    font-size: 0.8rem;
    color: #888;
  }
`;

const LinkBtn = styled(Link)`
  margin-top: 1rem;
  background-color: #f2f4f7;
  color: #ccc;
  padding: 0.5rem 1.5rem;
  border-radius: 1rem;
  font-size: 0.8rem;
  &:hover {
    background-color: ${(props) => props.theme.colors.mainColor};
    color: white;
  }
`;

export default function AuthLayout() {
  const { route } = useRouter();
  const isLogin = route === '/login';
  const url = isLogin ? '/register' : '/login';
  return (
    <Wrapper>
      <SEO title={isLogin ? '로그인' : '회원가입'} />
      <Layout>
        <Header>
          <h1>모으잡</h1>
          <h2>새로운 도전을 위한 시작</h2>
          <p>채용공고를 모으고 정리해보세요</p>
        </Header>
        <AuthForm isLogin={isLogin} />
        {isLogin && <AuthPlatform />}
        <LinkBtn href={url}>
          <span>{isLogin ? '회원가입' : '로그인'}하러 가기</span>
        </LinkBtn>
      </Layout>
    </Wrapper>
  );
}
