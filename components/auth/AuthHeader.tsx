import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 2.5rem;

  h1,
  h2 {
    font-weight: bold;
  }
  h1 {
    font-size: 1.6rem;
    color: ${(props) => props.theme.colors.mainColor};
    margin-bottom: 2rem;
  }
  h2 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }
  p {
    font-size: 0.9rem;
    color: #888;
  }
`;

export default function AuthHeader() {
  return (
    <Wrapper>
      <h1>모으잡</h1>
      <h2>새로운 도전을 위한 시작</h2>
      <p>채용공고를 모으고 정리해보세요</p>
    </Wrapper>
  );
}
