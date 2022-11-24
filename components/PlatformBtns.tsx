import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { AiFillGithub } from 'react-icons/ai';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 0.5rem;
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
    width: 2rem;
    height: 2rem;
  }
`;

export default function PlatformBtns() {
  return (
    <Wrapper>
      <button>
        <FcGoogle />
        <span>Google</span>
      </button>
      <button>
        <AiFillGithub />
        <span>Github</span>
      </button>
    </Wrapper>
  );
}
