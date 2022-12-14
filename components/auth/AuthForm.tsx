import React, { useState } from 'react';

import styled from 'styled-components';
import { signIn } from 'next-auth/react';
import AuthInput from './AuthInput';

const FormLayout = styled.form<{ isActive: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2em;
  p {
    text-align: center;
    margin-bottom: 1rem;
    font-size: 0.8rem;
  }

  button {
    margin-top: 0.5rem;
    background-color: ${(props) =>
      props.isActive
        ? props.theme.colors.mainColor
        : props.theme.colors.lightGray};
    width: 100%;
    padding: 0.5rem 0;
    border-radius: 1rem;
    color: white;
    pointer-events: ${(props) => (props.isActive ? 'auto' : 'none')};
    margin-bottom: 1rem;
  }
`;

const Message = styled.p`
  width: 100%;
  font-size: 0.9rem;
  padding: 0.3rem 0.5rem;
  border-radius: 1rem;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.mainColor};
`;

//Todo: message에러 핸들링 추가

export default function AuthForm() {
  const [email, setEmail] = useState('');
  const [isSent, setIsSent] = useState(false);
  const [onError, setOnError] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setEmail(value);
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) {
      return;
    }
    const result = await signIn('email', { email, redirect: false });
    if (!result?.ok) {
      setOnError(true);
    }
    setIsSent(true);
  };
  const isInActive = email.length < 6;

  return (
    <FormLayout isActive={!isInActive} onSubmit={handleSubmit}>
      {!isSent && (
        <>
          <p>
            이메일을 입력해주시면 <br /> 로그인 링크를 보내드려요!
          </p>
          <AuthInput onChange={handleChange} email={email} />
          <button type="submit" disabled={isInActive}>
            계속
          </button>
        </>
      )}
      {isSent && !onError && (
        <Message>{email}로 성공적으로 발송되었습니다`</Message>
      )}
    </FormLayout>
  );
}
