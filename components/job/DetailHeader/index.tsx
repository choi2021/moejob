import Image from 'next/image';
import React from 'react';
import { DescriptionType } from '../../../types/Jobtype';
import { Kinds } from '../../../variables/jobVariable';
import DescriptionList from '../DescriptionList';
import { S } from './styles';

interface DetailHeaderProps {
  img: string;
  name: string;
  url: string;
  checkPercentage: number;
  mainWork: DescriptionType;
}

export default function DetailHeader({
  img,
  name,
  url,
  checkPercentage,
  mainWork,
}: DetailHeaderProps) {
  return (
    <S.Layout>
      <S.JobImg
        src={img}
        alt="detail_image"
        height={350}
        width={400}
        priority
      />
      <S.MetaBox>
        <h1>{name}</h1>
        <S.LinkBox href={url}>{url}</S.LinkBox>
        <S.InfoBox>
          <h3>플랫폼:</h3>
          <Image
            src="/wanted_logo.png"
            alt="logo"
            height={100}
            width={100}
            priority
          />
          <h3>태그:</h3>
          {checkPercentage >= 0.5 && <div>50%이상</div>}
        </S.InfoBox>
        <DescriptionList kind={Kinds.MainWork} list={mainWork} />
      </S.MetaBox>
    </S.Layout>
  );
}
