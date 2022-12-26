import React from 'react';
import NotFound from '../../components/NotFound';
import MainLayout from '../../components/job/MainLayout';
import DetailJob from '../../components/job/DetailJob';
import JobSection from '../../components/job/JobSection';
import { NextSeo } from 'next-seo';
import {  NextPageContext } from 'next';
import { DBServiceImpl } from '../../service/DBService';
import { firebaseApp } from '../../src/firerbase.config';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import { Jobs } from '../../src/types/Jobtype';
import { JOBS_KEY } from '../../src/variables/jobVariable';
import { AxiosError } from 'axios';
import { useJobs } from '../../hooks/useJobs';

function Index() {
  const { getFilteredJobs, getJobById } = useJobs();
  const { data: job } = getJobById;
  const { data: allJobs } = getFilteredJobs;

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
            <JobSection jobs={allJobs} />
          </>
        )}
      </MainLayout>
    </>
  );
}

export default Index;

export const getServerSideProps = async (context: NextPageContext) => {
  const query = context.query;
  const id = query.id?.toString();
  const queryClient = new QueryClient();
  const dbService = new DBServiceImpl(firebaseApp);
  if (!id) {
    return {
      redirect: {
        destination: '/',
      },
    };
  }

  await queryClient.prefetchQuery<Jobs, AxiosError, Jobs, [string, string]>(
    [JOBS_KEY, 'all'],
    () => dbService.getJobs()
  );

  return {
    props: { dehydratedState: dehydrate(queryClient) },
  };
};
