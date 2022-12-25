import React from 'react';
import styled from 'styled-components';
import { AiOutlinePlus } from 'react-icons/ai';
import AdminDescriptionItem from './AdminDescriptionItem';
import { DescriptionNameType, DescriptionType } from '../../src/types/Jobtype';
import TextArea from './TextArea';

const Wrapper = styled.div`
  grid-column: span 2;
  padding: 1rem;
  min-height: 15rem;
  ul {
    padding: 0.5rem;
    margin-top: 0.5rem;
    overflow-y: auto;
    border-radius: 1rem;
    max-height: 15rem;
    background-color: ${(props) => props.theme.colors.white};
  }
`;

const Btn = styled.button`
  background-color: ${(props) => props.theme.colors.mainColor};
  color: ${(props) => props.theme.colors.white};
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  display: flex;
  font-size: 1.5rem;
  justify-content: center;
  align-items: center;
  margin-left: 1rem;
`;

type AdminDescriptionListProps = {
  name: DescriptionNameType;
  title: '주요 업무' | '자격 요건' | '우대 사항';
  value: DescriptionType[] | string;
  onAdd: (name: DescriptionNameType) => void;
  onChange: (name: DescriptionNameType, value: string, id: string) => void;
  onDelete: (name: DescriptionNameType, id: string) => void;
  onNewDescriptionChange: (name: DescriptionNameType, value: string) => void;
};

export default function AdminDescriptionList({
  name,
  title,
  value,
  onAdd,
  onDelete,
  onChange,
  onNewDescriptionChange,
}: AdminDescriptionListProps) {
  const isString = typeof value === 'string';
  console.log(value);
  return (
    <Wrapper>
      <header>
        <h3>{title}</h3>
        <Btn onClick={() => onAdd(name)}>
          <AiOutlinePlus />
        </Btn>
      </header>
      {isString && (
        <TextArea
          text={value}
          name={name}
          onChange={onNewDescriptionChange}
        ></TextArea>
      )}
      {!isString && (
        <ul>
          {value.map((item) => (
            <AdminDescriptionItem
              key={item.id}
              name={name}
              item={item}
              onChange={onChange}
              onDelete={onDelete}
            />
          ))}
        </ul>
      )}
    </Wrapper>
  );
}
