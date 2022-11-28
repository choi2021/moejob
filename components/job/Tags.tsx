import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  h3 {
    font-size: 0.9rem;
    font-weight: bold;
    margin-right: 0.5rem;
  }
  div {
    padding: 0.25rem 0.5rem;
    background-color: lightblue;
    margin-right: 0.5rem;
    font-size: 0.8rem;
    border-radius: 1rem;
  }
`;

export default function Tags() {
  return (
    <Wrapper>
      <h3>Tags:</h3>
      <div>1순위</div>
      <div>50%이상</div>
    </Wrapper>
  );
}
