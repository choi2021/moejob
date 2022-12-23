import React from 'react';
import JobSection from '../components/job/JobSection';
import MainLayout from '../components/job/MainLayout';
import SEO from '../components/SEO';
function Home() {
  return (
    <MainLayout>
      <SEO title={'모으잡'} />
      <JobSection session={undefined} />
    </MainLayout>
  );
}

export default Home;
