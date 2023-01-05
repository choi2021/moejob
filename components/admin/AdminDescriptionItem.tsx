import React from 'react';
import styled from 'styled-components';
import { DescriptionNameType, DescriptionType } from '../../src/types/Jobtype';
import { BsTrash } from 'react-icons/bs';
const Wrapper = styled.li`
  padding: 0.5rem 1rem;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;

  input {
    font-size: 0.8rem;
    background-color: ${(props) => props.theme.colors.white};
    width: 100%;
    line-height: 1.5rem;
    border: none;
    border-bottom: 1px solid ${(props) => props.theme.colors.gray};
  }
`;

type AdminDescriptionItemType = {
  item: DescriptionType;
  name: DescriptionNameType;
  onDelete: (name: DescriptionNameType, id: string) => void;
  onChange: (name: DescriptionNameType, value: string, id: string) => void;
};

export default function AdminDescriptionItem({
  item,
  name,
  onDelete,
  onChange,
}: AdminDescriptionItemType) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    onChange(name, value, item.id);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onDelete(name, item.id);
  };

  return (
    <Wrapper>
      <input required value={item.text} onChange={handleChange} />
      <button onClick={handleClick}>
        <BsTrash />
      </button>
    </Wrapper>
  );
}
