import React from 'react';
import { DescriptionType } from '../../../src/types/Jobtype';
import { S } from './styles';

type DetailHeaderProps = {
  platform: string;
  img: string;
  name: string;
  url: string;
  checkPercentage: number;
  mainWork: DescriptionType[];
};

export default function DetailHeader({
  img,
  name,
  url,
  checkPercentage,
  platform,
}: DetailHeaderProps) {
  return (
    <S.Layout>
      <S.ImgBox>
        <S.JobImg
          src={img}
          alt="detail_image"
          height={800}
          width={1000}
          priority
        />
      </S.ImgBox>
      <S.MetaBox>
        <h1>{name}</h1>
        <S.LinkBox href={url}>{url}</S.LinkBox>
        <S.InfoBox>
          <h3>플랫폼: {platform}</h3>

          {checkPercentage >= 0.5 && (
            <h3>
              태그:<div>50%이상</div>
            </h3>
          )}
        </S.InfoBox>
      </S.MetaBox>
    </S.Layout>
  );
}
