import React from 'react';
import JobSection from '../components/job/JobSection';
import MainLayout from '../components/job/MainLayout';
function Home() {
  return (
    <MainLayout>
      <JobSection session={undefined} />
    </MainLayout>
  );
}

export default Home;
