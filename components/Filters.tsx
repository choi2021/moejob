import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  margin: 1rem 0;
  button {
    margin-right: 0.5rem;
    font-weight: bold;
    padding: 0.5rem 1rem;
    color: #888;
    border: 2px solid #e1e2e3;
    border-radius: 1.5rem;
    transition: 200ms ease-in all;
    &:hover {
      color: lightcoral;
      border-color: lightcoral;
    }
  }
`;

export default function Filters() {
  return (
    <Wrapper>
      <button>All</button>
      <button>Wanted</button>
      <button>프로그래머스</button>
    </Wrapper>
  );
}
