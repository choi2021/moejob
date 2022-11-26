import React, { useReducer, useState } from 'react';
import AuthInput from '../AuthInput';
import { UserInfoType } from '../../types/Authtypes';
import styled from 'styled-components';
import { useAuthService } from '../../context/AuthContext';
import { useRouter } from 'next/router';
import ErrorMessage from '../ErrorMessage';
import { authReducer, login, register } from './AuthFormLogic';

const initialState: UserInfoType = {
  email: '',
  password: '',
  emailValid: false,
  passwordValid: false,
};

const EMAIL_INPUT = {
  name: 'EMAIL',
  placeholder: '@포함 세글자 이상 이메일을 입력해주세요',
} as const;

const PASSWORD_INPUT = {
  name: 'PASSWORD',
  placeholder: '여섯글자 이상의 비밀번호를 입력해주세요',
} as const;

interface AuthFormProps {
  isLogin: boolean;
}

const Layout = styled.form<{ isActive: boolean }>`
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
    background-color: ${(props) =>
      props.isActive
        ? props.theme.colors.mainColor
        : props.theme.colors.lightGray};
    width: 100%;
    padding: 0.5rem 0;
    border-radius: 1rem;
    color: white;
    pointer-events: ${(props) => (props.isActive ? 'auto' : 'none')};
  }
`;

export default function AuthForm({ isLogin }: AuthFormProps) {
  const [message, setMessage] = useState('');
  const [userInfo, dispatch] = useReducer(authReducer, initialState);
  const isInActive = !userInfo.emailValid || !userInfo.passwordValid;
  const authService = useAuthService();
  const router = useRouter();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isLogin) {
      login(userInfo, authService, router, setMessage);
    } else {
      register(userInfo, authService, router, setMessage);
    }
  };
  const name = isLogin ? '로그인' : '회원가입';

  return (
    <Layout action="submit" onSubmit={handleSubmit} isActive={!isInActive}>
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
      {message && <ErrorMessage message={message} />}
      <button type="submit" disabled={isInActive}>
        {name}
      </button>
    </Layout>
  );
}
