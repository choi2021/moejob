import React from 'react';
import styled from 'styled-components';
import { Providers } from '../../src/types/Authtypes';

import PlatformBtn from './PlatformBtn';

const Wrapper = styled.div`
  display: flex;
  span {
    color: #888;
  }
  button {
    margin: 0 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 0.8rem;
  }
  svg {
    width: 3rem;
    height: 3rem;
  }
`;

export default function PlatformBtns({ providers }: { providers: Providers }) {
  return (
    <Wrapper>
      {Object.values(providers).map((provider) => {
        if (provider.name === 'Email') {
          return <React.Fragment key={provider.name}></React.Fragment>;
        }
        return (
          <PlatformBtn key={provider.name} provider={provider}></PlatformBtn>
        );
      })}
    </Wrapper>
  );
}
