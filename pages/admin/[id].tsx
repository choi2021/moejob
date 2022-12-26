import React from 'react';
import uuid from 'react-uuid';
import AdminForm from '../../components/admin/AdminForm';
import MainLayout from './../../components/job/MainLayout';
import { InferGetServerSidePropsType, NextPageContext } from 'next';
import { NextSeo } from 'next-seo';
import { DBServiceImpl } from '../../service/DBService';
import { firebaseApp } from '../../src/firerbase.config';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import { Jobs } from '../../src/types/Jobtype';
import { getSession } from 'next-auth/react';
import { JOBS_KEY } from '../../src/variables/jobVariable';
import { AxiosError } from 'axios';
import { useJobs } from '../../hooks/useJobs';

const newValue = {
  name: '',
  platform: '플랫폼',
  id: uuid(),
  mainWork: [],
  qualification: [],
  preferential: [],
  url: '',
  img: '',
  checkPercentage: 0,
};

export default function AdminDetail({
  id,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { getJobById } = useJobs();
  const { data: job } = getJobById;
  const isNew = id === 'new';
  const initialValue = job || newValue;
  const SEOTitle = job ? `${job.name} 수정` : '새로운 공고 추가';
  return (
    <>
      <NextSeo
        title={SEOTitle}
        openGraph={{
          images: [{ url: job?.img || '' }],
        }}
      />
      <MainLayout>
        {<AdminForm isNew={isNew} initialValue={initialValue} />}
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
  const jobs = await dbService.getJobs();
  if (!session) {
    return {
      redirect: {
        destination: '/login',
      },
    };
  }
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
    props: { dehydratedState: dehydrate(queryClient), id },
  };
};
