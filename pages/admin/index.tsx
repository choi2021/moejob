import { NextPageContext } from 'next';
import { getSession } from 'next-auth/react';
import React from 'react';
import MainLayout from '../../components/job/MainLayout';
import JobSection from './../../components/job/JobSection';

export default function index() {
  return (
    <MainLayout>
      <JobSection session={undefined} />
    </MainLayout>
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
