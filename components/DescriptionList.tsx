import React from 'react';
import styled from 'styled-components';
import { Titles } from '../variables/jobVariable';
import DescriptionItem from './DescriptionItem';

interface DescriptionListProps {
  list: string[];
  title: TitleType;
}

const List = styled.ul`
  padding: 1rem;
  h3 {
    margin-bottom: 0.5rem;
    font-weight: bold;
  }
`;

export default function DescriptionList({ list, title }: DescriptionListProps) {
  return (
    <List>
      <h3>{title}:</h3>
      {list.map((item) => (
        <DescriptionItem
          key={item}
          text={item}
          isMainJob={title === Titles.MainWork}
        />
      ))}
    </List>
  );
}
