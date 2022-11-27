import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';
import DetailJob from '../../components/DetailJob';
import JobList from '../../components/JobList';
import Layout from '../../components/MainLayout';
import { useDBService } from '../../context/DBContext';
import { useQuery } from '@tanstack/react-query';
import { ModifiedJobsType } from '../../types/Jobtype';

import NotFound from '../../components/NotFound';

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
  if (isLoading) <p>로딩중입니다...</p>;
  return (
    <Layout>
      {!data && <NotFound />}
      {data && (
        <>
          <DetailJob />
          <JobListBox>
            <JobList />
          </JobListBox>
        </>
      )}
    </Layout>
  );
}
