import React from 'react';
import styled from 'styled-components';
import { CheckedDescriptionType } from '../types/Jobtype';
import { Kinds } from '../variables/jobVariable';
import DescriptionItem from './DescriptionItem';

interface DescriptionListProps {
  list: CheckedDescriptionType[] | string[];
  kind: string;
}

const List = styled.ul`
  width: 100%;
  padding: 1rem;
  h3 {
    margin-bottom: 0.5rem;
    font-weight: bold;
  }
`;

export default function DescriptionList({ list, kind }: DescriptionListProps) {
  return (
    <List>
      <h3>{kind}:</h3>
      {list.map((item) => {
        if (typeof item === 'string') {
          return (
            <DescriptionItem
              key={item}
              kind={kind}
              text={item}
              isMainJob={kind === Kinds.MainWork}
            />
          );
        } else {
          return (
            <DescriptionItem
              key={item.text}
              kind={kind}
              text={item.text}
              checked={item.checked}
              isMainJob={kind === Kinds.MainWork}
            />
          );
        }
      })}
    </List>
  );
}
