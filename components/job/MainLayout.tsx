import React from 'react';
import styled from 'styled-components';
import Navbar from '../Navbar';

const Wrapper = styled.section`
  padding-top: 3rem;
  margin: auto;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Layout = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
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
