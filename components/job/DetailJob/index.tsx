import React from 'react';
import DescriptionList from '../DescriptionList';
import DetailHeader from '../DetailHeader';
import S from './styles';
import { KINDS } from '../../../src/variables/jobVariable';
import { Job } from '../../../src/types/Jobtype';
import SideBox from '../SideBox';

export default function DetailJob({ job }: { job: Job }) {
  const {
    platform,
    mainWork,
    img,
    name,
    url,
    checkPercentage,
    qualification,
    preferential,
  } = job;
  return (
    <S.Wrapper>
      <S.DetailBox>
        <DetailHeader
          platform={platform}
          img={img}
          name={name}
          url={url}
          checkPercentage={checkPercentage}
          mainWork={mainWork}
        />
        <S.DescriptionBox>
          <DescriptionList kind={KINDS.MAINWORK} list={mainWork} />
          <DescriptionList kind={KINDS.QUALIFICATION} list={qualification} />
          <DescriptionList kind={KINDS.PREFERENTIAL} list={preferential} />
        </S.DescriptionBox>
      </S.DetailBox>
      <SideBox job={job} />
    </S.Wrapper>
  );
}
