import React, { useState } from 'react';
import styled from 'styled-components';
import { RiCheckboxBlankCircleFill } from 'react-icons/ri';

interface DescriptionItemProps {
  text: string;
  isMainJob: boolean;
}

const List = styled.li`
  padding: 0.25rem 0rem;
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
  line-height: 1.5;
  svg,
  input {
    width: 0.5rem;
    margin-right: 0.5rem;
    cursor: pointer;
  }

  input {
    width: 0.8rem;
  }
`;

export default function DescriptionItem({
  text,
  isMainJob,
}: DescriptionItemProps) {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <List>
      {isMainJob && <RiCheckboxBlankCircleFill />}
      {!isMainJob && <input type='checkbox' />}
      <span>{text}</span>
    </List>
  );
}
