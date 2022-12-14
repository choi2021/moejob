import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  span {
    font-size: 0.8rem;
    color: #888;
  }
  input {
    outline: none;
    border-radius: 0.5rem;
    margin: 0.7rem 0;
    width: 100%;
    padding: 0.5rem 1rem;
    border: #888 2px solid;
  }
`;

type AuthInputProps = {
  email: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function AuthInput({ email, onChange }: AuthInputProps) {
  return (
    <Wrapper>
      <label>이메일</label>
      <input
        value={email}
        placeholder="이메일을 입력해주세요"
        onChange={onChange}
        required
      />
    </Wrapper>
  );
}
