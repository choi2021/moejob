import React from 'react';
import DescriptionList from '../DescriptionList';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { useDBService } from '../../../context/DBContext';
import { ModifiedJobsType } from '../../../types/Jobtype';
import { Kinds } from '../../../variables/jobVariable';
import DetailHeader from '../DetailHeader';
import S from './styles';

export default function DetailJob() {
  const { query } = useRouter();
  const dbService = useDBService();
  const { id } = query;
  const jobId = typeof id === 'string' ? id : id?.join() || '';
  const { data } = useQuery(
    ['jobs'],
    () => {
      return dbService.getJobs();
    },
    {
      select: (data: ModifiedJobsType) => {
        return data[jobId];
      },
    }
  );

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
              kind={Kinds.qualification}
              list={data.qualification}
            />
            <DescriptionList
              kind={Kinds.preferential}
              list={data.preferential}
            />
          </S.DescriptionBox>
        </>
      )}
    </S.Wrapper>
  );
}
