import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const MainLayout = styled.main`
  flex: 1;
  padding: 0.5rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Wrapper>
      <Navbar />
      <MainLayout>{children}</MainLayout>
    </Wrapper>
  );
}

export default Layout;
