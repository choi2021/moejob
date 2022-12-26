import { dehydrate, QueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import React from 'react';
import JobSection from '../components/job/JobSection';
import MainLayout from '../components/job/MainLayout';
import { useJobs } from '../hooks/useJobs';
import { DBServiceImpl } from '../service/DBService';
import { firebaseApp } from '../src/firerbase.config';
import { Jobs } from '../src/types/Jobtype';
import { JOBS_KEY } from '../src/variables/jobVariable';

function Home() {
  const { getJobs } = useJobs();
  const { data } = getJobs;
  return (
    <MainLayout>
      <JobSection jobs={data} />
    </MainLayout>
  );
}

export default Home;

export const getServerSideProps = async () => {
  const queryClient = new QueryClient();
  const dbService = new DBServiceImpl(firebaseApp);
  await queryClient.prefetchQuery<Jobs, AxiosError, Jobs, [string, string]>(
    [JOBS_KEY, 'all'],
    () => dbService.getJobs()
  );

  return {
    props: { dehydratedState: dehydrate(queryClient) },
  };
};
