import { NextPageContext } from 'next';
import { getSession } from 'next-auth/react';
import React from 'react';
import MainLayout from '../components/job/MainLayout';
import SEO from '../components/SEO';
import MainContent from './../components/job/MainContent';
function Home() {
  return (
    <MainLayout>
      <SEO title={'모으잡'} />
      <MainContent />
    </MainLayout>
  );
}

export default Home;

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
