import React from 'react';
import styled from 'styled-components';
import { DescriptionNameType } from '../../src/types/Jobtype';

const Wrapper = styled.textarea`
  padding: 0.5rem;
  width: 100%;
  margin-top: 0.5rem;
  overflow-y: auto;
  border-radius: 1rem;
  max-height: 10rem;
  height: 100%;
  outline: none;
  line-height: 1.5rem;
`;

type TextAreaType = {
  text: string;
  title: string;
  name: DescriptionNameType;
  onChange: (name: DescriptionNameType, value: string) => void;
};

export default function TextArea({
  title,
  name,
  text,
  onChange,
}: TextAreaType) {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.currentTarget;
    onChange(name, value);
  };
  return (
    <Wrapper
      placeholder={`${title}을 복사-붙여넣기 해주세요`}
      required
      value={text}
      onChange={handleChange}
    ></Wrapper>
  );
}
