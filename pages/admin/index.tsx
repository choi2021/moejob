import { dehydrate, QueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { NextPageContext } from 'next';
import { getSession } from 'next-auth/react';
import { NextSeo } from 'next-seo';
import React from 'react';
import MainLayout from '../../components/job/MainLayout';
import { useJobs } from '../../hooks/useJobs';
import { DBServiceImpl } from '../../service/DBService';
import { firebaseApp } from '../../src/firerbase.config';
import { Jobs } from '../../src/types/Jobtype';
import { JOBS_KEY } from '../../src/variables/jobVariable';
import JobSection from './../../components/job/JobSection';

export default function Admin() {
  const { getJobs } = useJobs();
  const { data } = getJobs;
  return (
    <>
      <NextSeo title="전체공고" />
      <MainLayout>
        <JobSection jobs={data} />
      </MainLayout>
    </>
  );
}

export const getServerSideProps = async (context: NextPageContext) => {
  const session = await getSession(context);
  const queryClient = new QueryClient();
  const dbService = new DBServiceImpl(firebaseApp);
  await queryClient.prefetchQuery<Jobs, AxiosError, Jobs, [string, string]>(
    [JOBS_KEY, 'all'],
    () => dbService.getJobs()
  );
  if (!session) {
    return {
      redirect: {
        destination: '/login',
      },
    };
  }
  return {
    props: { dehydratedState: dehydrate(queryClient) },
  };
};
