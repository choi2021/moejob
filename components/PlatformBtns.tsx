import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { AiFillGithub } from 'react-icons/ai';
import styled from 'styled-components';
import { useAuth } from '../context/AuthContext';
import { OAuthType } from '../types/Authtypes';
import { useRouter } from 'next/router';
import { AccessToken } from '../variables/authVariable';
import { UserCredential } from 'firebase/auth';

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

type PlatformType = {
  [key: string]: OAuthType;
};

const PLATFORM: PlatformType = {
  GOOGLE: 'google',
  GITHUB: 'github',
};

export default function PlatformBtns() {
  const { push } = useRouter();
  const authService = useAuth();
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = e.currentTarget;
    if (name === PLATFORM.GOOGLE || name === PLATFORM.GITHUB) {
      authService
        .OAuthSignIn(name)
        .then((userData: UserCredential) => {
          return userData.user.getIdToken();
        })
        .then((token) => {
          localStorage.setItem(AccessToken, token);
          push('/');
        })
        .catch((error) => console.log(error));
    }
  };
  return (
    <Wrapper>
      <button name={PLATFORM.GOOGLE} onClick={handleClick}>
        <FcGoogle />
        <span>Google</span>
      </button>
      <button name={PLATFORM.GITHUB} onClick={handleClick}>
        <AiFillGithub />
        <span>Github</span>
      </button>
    </Wrapper>
  );
}
