import React from 'react';
import MainLayout from '../components/job/MainLayout';
import { withProtected } from '../components/ProtectedRoute';
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

export default withProtected(Home);
