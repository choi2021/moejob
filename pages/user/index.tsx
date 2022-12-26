import React from 'react';
import MainLayout from '../../components/job/MainLayout';
import { getSession } from 'next-auth/react';
import { InferGetServerSidePropsType, NextPageContext } from 'next';
import JobSection from '../../components/job/JobSection';
import { NextSeo } from 'next-seo';
import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query';
import { DBServiceImpl } from '../../service/DBService';
import { firebaseApp } from '../../src/firerbase.config';
import { JOBS_KEY } from '../../src/variables/jobVariable';
import { useDBService } from '../../context/DBContext';
import { Jobs } from '../../src/types/Jobtype';
import { AxiosError } from 'axios';
import { User } from '../../src/types/Authtypes';
import { useJobs } from './../../hooks/useJobs';

export default function UserPage({
  session,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { getJobs } = useJobs(session.user);
  const { data } = getJobs;
  return (
    <>
      <NextSeo title="모은 공고" />
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
  if (!session) {
    return {
      redirect: {
        destination: '/login',
      },
    };
  }
  await queryClient.prefetchQuery<Jobs, AxiosError, Jobs, [string, User]>(
    [JOBS_KEY, session?.user],
    () => dbService.getJobs(session?.user)
  );

  return {
    props: { dehydratedState: dehydrate(queryClient), session },
  };
};
