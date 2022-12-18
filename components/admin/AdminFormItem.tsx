import React from 'react';
import styled from 'styled-components';

type AdminFormItemProp = {
  name: string;
  title: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  padding: 1rem;
  label {
    text-align: center;
    margin-right: 0.2rem;
    font-size: 0.8rem;
    padding: 0.1rem 0.2rem;
    border-radius: 0.5rem;
  }
  input {
    flex: 1;
    border: none;
    padding: 0.1rem 0.2rem;
    border-bottom: 2px solid ${(props) => props.theme.colors.gray};
  }
`;

export default function AdminFormItem({
  name,
  title,
  value,
  onChange,
}: AdminFormItemProp) {
  return (
    <Wrapper>
      <label htmlFor={name}>{title}:</label>
      <input
        required
        name={name}
        type="text"
        onChange={onChange}
        value={value}
      />
    </Wrapper>
  );
}
