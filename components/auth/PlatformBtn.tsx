import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { AiFillGithub } from 'react-icons/ai';
import { signIn } from 'next-auth/react';
import { Provider } from '../../types/Authtypes';

export default function PlatformBtn({ provider }: { provider: Provider }) {
  const { name, id } = provider;
  return (
    //redirect는 새로고침막는것
    <button onClick={() => signIn(id, { redirect: false, callbackUrl: '/' })}>
      {name === 'GitHub' && <AiFillGithub />}
      {name === 'Google' && <FcGoogle />}
      <span>{name}</span>
    </button>
  );
}
