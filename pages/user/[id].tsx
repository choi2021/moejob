import { InferGetServerSidePropsType, NextPageContext } from 'next';
import React from 'react';
import DetailJob from '../../components/job/DetailJob';
import MainLayout from '../../components/job/MainLayout';
import NotFound from '../../components/NotFound';
import { NextSeo } from 'next-seo';
import { DBServiceImpl } from '../../service/DBService';
import { firebaseApp } from '../../src/firerbase.config';
import { useDBService } from '../../context/DBContext';
import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query';
import { Jobs } from '../../src/types/Jobtype';
import { JOBS_KEY } from '../../src/variables/jobVariable';
import { AxiosError } from 'axios';
import { getSession } from 'next-auth/react';
import { User } from '../../src/types/Authtypes';
import JobSection from '../../components/job/JobSection';
import { useJobs } from '../../hooks/useJobs';

export default function UserDetail({
  session,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { getFilteredJobs, getJobById } = useJobs(session.user);
  const { data: job } = getJobById;
  const { data: userJobs } = getFilteredJobs;
  return (
    <>
      <NextSeo
        title={`${job?.name}`}
        openGraph={{
          images: [{ url: job?.img || '' }],
        }}
      />
      <MainLayout>
        {!job && <NotFound />}
        {job && (
          <>
            <DetailJob job={job} />
            <JobSection jobs={userJobs} />
          </>
        )}
      </MainLayout>
    </>
  );
}

export const getServerSideProps = async (context: NextPageContext) => {
  const session = await getSession(context);
  const query = context.query;
  const id = query.id?.toString();
  const queryClient = new QueryClient();
  const dbService = new DBServiceImpl(firebaseApp);
  if (!id || !session) {
    return {
      redirect: {
        destination: '/',
      },
    };
  }

  await queryClient.prefetchQuery<Jobs, AxiosError, Jobs, [string, User]>(
    [JOBS_KEY, session?.user],
    () => dbService.getJobs(session.user)
  );

  return {
    props: { dehydratedState: dehydrate(queryClient), session },
  };
};
