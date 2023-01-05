import React from 'react';
import styled from 'styled-components';
import { JOB_SCHEMA } from '../../src/variables/jobVariable';

const SelectBox = styled.div`
  display: flex;
  align-items: center;
  label {
    text-align: center;
    margin-right: 0.2rem;
    font-size: 0.8rem;
    padding: 0.1rem 0.2rem;
    border-radius: 0.5rem;
  }
  select {
    width: 100%;
    flex: 1;
    outline: none;
    padding: 0.1rem 0.2rem;
    border: none;
    border-bottom: 1px solid ${(props) => props.theme.colors.black};
    text-align: center;
  }
  @media screen and (max-width: 600px) {
    grid-column: span 2;
  }
`;

type SelectProps = {
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  platform: string;
};

const Options = [
  'platform',
  '원티드',
  '프로그래머스',
  '점핏',
  '사람인',
  '노션',
  '그리팅',
];

export default function Select({ onChange, platform }: SelectProps) {
  return (
    <SelectBox>
      <label htmlFor={JOB_SCHEMA.PLATFORM}>플랫폼:</label>
      <select
        name={JOB_SCHEMA.PLATFORM}
        id={JOB_SCHEMA.PLATFORM}
        onChange={onChange}
        value={platform}
      >
        {Options.map((item) => (
          <option value={item} key={item}>
            {item}
          </option>
        ))}
      </select>
    </SelectBox>
  );
}
