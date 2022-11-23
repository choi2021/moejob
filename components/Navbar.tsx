import React from 'react';
import styled from 'styled-components';

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
  h1 {
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
  return (
    <Wrapper>
      <Layout>
        <h1>모으잡</h1>
        <Btns>
          <button>Wanted</button>
          <button>문의하기</button>
          <button>로그아웃</button>
        </Btns>
      </Layout>
    </Wrapper>
  );
}
