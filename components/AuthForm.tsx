import React, { useReducer, useState } from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import Link from 'next/link';
import AuthInput from './AuthInput';
import { ActionType, UserInfoType } from '../types/Authtypes';
import Banner from './Banner';
import styled from 'styled-components';

const ACTION_CONST = {
  SET_EMAIL: 'SET_EMAIL',
  SET_PASSWORD: 'SET_PASSWORD',
} as const;

const initialState: UserInfoType = {
  email: '',
  password: '',
  emailValid: false,
  passwordValid: false,
};

const authReducer = (state: UserInfoType, action: ActionType) => {
  switch (action.type) {
    case ACTION_CONST.SET_EMAIL:
      const email = action.data;
      const emailValid = email.includes('@') && email.length >= 3;
      return { ...state, email, emailValid };
    case ACTION_CONST.SET_PASSWORD:
      const password = action.data;
      const passwordValid = password.length >= 4;
      return { ...state, password, passwordValid };
    default:
      throw new Error('Unknown Action');
  }
};

const EMAIL_INPUT = {
  name: 'EMAIL',
  placeholder: '@포함 세글자 이상 이메일을 입력해주세요',
} as const;

const PASSWORD_INPUT = {
  name: 'PASSWORD',
  placeholder: '세글자 이상의 비밀번호를 입력해주세요',
} as const;

interface AuthFormProps {
  isLogin: boolean;
}

const Layout = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  header {
    display: flex;
    justify-content: center;
  }

  button {
    margin-top: 2rem;
    background-color: lightcoral;
    width: 100%;
    padding: 0.5rem 0;
    border-radius: 1rem;
    color: white;
  }
`;

export default function AuthForm({ isLogin }: AuthFormProps) {
  const [message, setMessage] = useState('');
  const [userInfo, dispatch] = useReducer(authReducer, initialState);
  const isActive = !userInfo.emailValid || !userInfo.passwordValid;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  const url = isLogin ? '/register' : '/login';
  const name = isLogin ? '로그인' : '회원가입';
  return (
    <Layout action="submit" onSubmit={handleSubmit}>
      <AuthInput
        name={EMAIL_INPUT.name}
        text={userInfo.email}
        title={'이메일'}
        placeholder={EMAIL_INPUT.placeholder}
        dispatch={dispatch}
      />
      <AuthInput
        name={PASSWORD_INPUT.name}
        text={userInfo.password}
        title={'비밀번호'}
        placeholder={PASSWORD_INPUT.placeholder}
        dispatch={dispatch}
      />
      {message && <Banner message={message} />}
      <button type="submit" disabled={isActive}>
        {name}
      </button>
    </Layout>
  );
}
