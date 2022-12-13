import { GetServerSideProps } from 'next';
import { getSession, useSession } from 'next-auth/react';
import React from 'react';
import MainLayout from '../components/job/MainLayout';
import SEO from '../components/SEO';
import MainContent from './../components/job/MainContent';

export default function Home() {
  const { data: session, status } = useSession();
  console.log(session);
  if (status === 'authenticated') {
    return (
      <MainLayout>
        <SEO title={'모으잡'} />
        <MainContent />
      </MainLayout>
    );
  }
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);
  if (!session) {
    return {
      props: {},
      redirect: {
        destination: '/login',
      },
    };
  }
  return {
    props: { session },
  };
};
