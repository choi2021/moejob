import React from 'react';
import DescriptionItem from '../DescriptionItem';
import { Kinds } from '../../../variables/jobVariable';
import { CheckedDescriptionType } from '../../../types/Jobtype';
import S from './styles';

interface DescriptionListProps {
  list: CheckedDescriptionType[] | string[];
  kind: string;
}

export default function DescriptionList({ list, kind }: DescriptionListProps) {
  return (
    <S.Wrapper>
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
    </S.Wrapper>
  );
}
