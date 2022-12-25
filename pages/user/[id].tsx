import { InferGetServerSidePropsType, NextPageContext } from 'next';
import { getSession } from 'next-auth/react';
import React from 'react';
import DetailJob from '../../components/job/DetailJob';
import JobList from '../../components/job/JobList';
import MainLayout from '../../components/job/MainLayout';
import NotFound from '../../components/NotFound';
import { useJobs } from '../../hooks/useJobs';
import { NextSeo } from 'next-seo';

export default function UserDetail({
  session,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const user = session.user;
  const { getJobById } = useJobs(user);
  const { isLoading, data } = getJobById;
  return (
    <>
      <NextSeo
        title={`${data?.name}`}
        openGraph={{
          images: [{ url: data?.img || '' }],
        }}
      />
      <MainLayout>
        {isLoading && <p>로딩중입니다...</p>}
        {!isLoading && !data && <NotFound />}
        {data && (
          <>
            <DetailJob job={data} />
            <JobList session={session} />
          </>
        )}
      </MainLayout>
    </>
  );
}

export const getServerSideProps = async (context: NextPageContext) => {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: '/login',
      },
    };
  }
  return {
    props: { session },
  };
};
