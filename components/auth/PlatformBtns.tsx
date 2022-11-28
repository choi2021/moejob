import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { AiFillGithub } from 'react-icons/ai';
import styled from 'styled-components';
import { AuthService, OAuthType } from '../../types/Authtypes';
import { useRouter, NextRouter } from 'next/router';
import { AccessToken } from '../../variables/authVariable';
import { useAuthService } from '../../context/AuthContext';

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

export const OAuthLogin = async (
  name: OAuthType,
  authService: AuthService,
  router: NextRouter
) => {
  const { push } = router;
  try {
    const userData = await authService.OAuthSignIn(name);
    const token = await userData.user.getIdToken();
    localStorage.setItem(AccessToken, token);
    push('/');
  } catch (error) {
    console.log(error);
  }
};

export default function PlatformBtns() {
  const authService = useAuthService();
  const router = useRouter();
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = e.currentTarget;
    if (name === PLATFORM.GOOGLE || name === PLATFORM.GITHUB) {
      OAuthLogin(name, authService, router);
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
