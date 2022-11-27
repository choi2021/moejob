import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Layout = styled.main`
  flex: 1;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <Wrapper>
      <Navbar />
      <Layout>{children}</Layout>
    </Wrapper>
  );
}

export default MainLayout;
