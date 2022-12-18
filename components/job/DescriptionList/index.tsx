import React from 'react';
import DescriptionItem from '../DescriptionItem';
import {
  DescriptionKindType,
  DescriptionType,
} from '../../../src/types/Jobtype';
import S from './styles';

interface DescriptionListProps {
  list: DescriptionType[];
  kind: DescriptionKindType;
}

const title = {
  mainWork: '주요업무',
  qualification: '자격조건',
  preferential: '우대사항',
};

export default function DescriptionList({ list, kind }: DescriptionListProps) {
  const isMainJob = kind === 'mainWork';
  return (
    <S.Wrapper>
      <h3>{title[kind]}:</h3>
      {list.map((item) => (
        <DescriptionItem
          key={item.text}
          kind={kind}
          text={item.text}
          checked={item.checked}
          isMainJob={isMainJob}
        />
      ))}
    </S.Wrapper>
  );
}
