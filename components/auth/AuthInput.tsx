import React from 'react';
import styled from 'styled-components';
import { ActionType } from '../types/Authtypes';

interface AuthInputProps {
  placeholder: string;
  text: string;
  name: 'EMAIL' | 'PASSWORD';
  title: '이메일' | '비밀번호';
  dispatch: React.Dispatch<ActionType>;
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5em;
  span {
    font-size: 0.6rem;
    color: #888;
  }
  input {
    margin-top: 0.5rem;
    width: 100%;
    padding: 0.5rem 1rem;
  }
`;

export default function AuthInput({
  placeholder,
  text,
  name,
  title,
  dispatch,
}: AuthInputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    dispatch({ type: `SET_${name}`, data: value });
  };
  return (
    <Wrapper>
      <span>{title}</span>
      <input
        name={name}
        value={text}
        placeholder={placeholder}
        type={name.toLowerCase()}
        onChange={handleChange}
        required
      />
    </Wrapper>
  );
}
