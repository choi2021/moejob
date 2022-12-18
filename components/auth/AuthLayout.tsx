import React from 'react';
import styled from 'styled-components';
import { Providers } from '../../src/types/Authtypes';
import AuthForm from './AuthForm';
import AuthHeader from './AuthHeader';
import PlatformBtns from './PlatformBtns';

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
  border-radius: 1rem;
`;

export default function AuthLayout({
  providers,
}: {
  providers: Providers | null | undefined;
}) {
  return (
    <Wrapper>
      <Layout>
        <AuthHeader />
        <AuthForm />
        {providers && <PlatformBtns providers={providers} />}
      </Layout>
    </Wrapper>
  );
}
