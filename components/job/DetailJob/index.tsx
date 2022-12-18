import React from 'react';
import DescriptionList from '../DescriptionList';
import { ModifiedJobType } from '../../../src/types/Jobtype';
import DetailHeader from '../DetailHeader';
import S from './styles';
import { KINDS } from '../../../src/variables/jobVariable';

export default function DetailJob({ data }: { data: ModifiedJobType }) {
  return (
    <S.Wrapper>
      {data && (
        <>
          <DetailHeader
            img={data.img}
            name={data.name}
            url={data.url}
            checkPercentage={data.checkPercentage}
            mainWork={data.mainWork}
          />
          <S.DescriptionBox>
            <DescriptionList
              kind={KINDS.QUALIFICATION}
              list={data.qualification}
            />
            <DescriptionList
              kind={KINDS.PREFERENTIAL}
              list={data.preferential}
            />
          </S.DescriptionBox>
        </>
      )}
    </S.Wrapper>
  );
}
