import React from 'react';
import styled from 'styled-components';
import Navbar from '../Navbar';

const Wrapper = styled.section`
  padding-top: 3rem;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.lightGray};
`;

const Layout = styled.main`
  border-radius: 0 0 1rem 1rem;
  max-width: 1000px;
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
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
