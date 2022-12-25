import React from 'react';
import MainLayout from '../../components/job/MainLayout';
import { getSession } from 'next-auth/react';
import { InferGetServerSidePropsType, NextPageContext } from 'next';
import JobSection from '../../components/job/JobSection';
import { NextSeo } from 'next-seo';

export default function User({
  session,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <NextSeo title="모은 공고" />
      <MainLayout>
        <JobSection session={session} />
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
