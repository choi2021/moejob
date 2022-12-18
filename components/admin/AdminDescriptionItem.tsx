import React from 'react';
import styled from 'styled-components';
import { DescriptionKindType, DescriptionType } from '../../src/types/Jobtype';
import { BsDot, BsTrash } from 'react-icons/bs';
const Wrapper = styled.li`
  padding: 0.5rem 1rem;
  width: 100%;
  display: flex;
  align-items: center;

  input {
    background-color: ${(props) => props.theme.colors.lightGray};
    width: 100%;
    border: none;
    border-bottom: 2px solid ${(props) => props.theme.colors.gray};
  }
`;

type AdminDescriptionItemType = {
  item: DescriptionType;
  name: DescriptionKindType;
  onDelete: (name: DescriptionKindType, id: string) => void;
  onChange: (name: DescriptionKindType, value: string, id: string) => void;
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
      <BsDot />
      <input required value={item.text} onChange={handleChange} />
      <button onClick={handleClick}>
        <BsTrash />
      </button>
    </Wrapper>
  );
}
