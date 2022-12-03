import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';
import { useDBService } from '../../context/DBContext';
import { useQuery } from '@tanstack/react-query';
import { ModifiedJobsType } from '../../types/Jobtype';

import NotFound from '../../components/NotFound';
import JobList from '../../components/job/JobList';
import MainLayout from '../../components/job/MainLayout';
import SEO from '../../components/SEO';
import DetailJob from '../../components/job/DetailJob';

const JobListBox = styled.section`
  max-width: 1000px;
  width: 100%;
`;

export default function Index() {
  const { query } = useRouter();
  const dbService = useDBService();
  const { id } = query;
  const jobId = typeof id === 'string' ? id : id?.join() || '';
  const { data, isLoading } = useQuery(
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
    <MainLayout>
      <SEO title={data ? `상세페이지 | ${data.name}` : '상세 페이지'} />
      {isLoading && <p>로딩중입니다...</p>}
      {!isLoading && !data && <NotFound />}
      {data && (
        <>
          <DetailJob />
          <JobListBox>
            <JobList />
          </JobListBox>
        </>
      )}
    </MainLayout>
  );
}
