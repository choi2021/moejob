import React from 'react';
import Banner from '../components/job/Banner';
import JobSection from '../components/job/JobSection';
import MainLayout from '../components/job/MainLayout';
import SEO from '../components/SEO';
function Home() {
  return (
    <MainLayout>
      <SEO title={'모으잡'} />
      <Banner />
      <JobSection session={undefined} />
    </MainLayout>
  );
}

export default Home;
