import React from 'react';
import styled from 'styled-components';

import PlatformBtns from './PlatformBtns';

const Wrapper = styled.div`
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    font-size: 0.8rem;
  }
`;

export default function AuthPlatform() {
  return (
    <Wrapper>
      <h3>또는</h3>
      <PlatformBtns />
    </Wrapper>
  );
}
