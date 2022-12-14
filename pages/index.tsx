import { NextPageContext } from 'next';
import { getSession, useSession } from 'next-auth/react';
import React from 'react';
import MainLayout from '../components/job/MainLayout';
import Protected from '../components/protected';
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

export default Protected(Home);

export const getServerSideProps = async (context: NextPageContext) => {
  const session = await getSession(context);
  console.log(session);
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
