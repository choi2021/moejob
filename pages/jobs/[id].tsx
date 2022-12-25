import React from 'react';
import NotFound from '../../components/NotFound';
import MainLayout from '../../components/job/MainLayout';
import DetailJob from '../../components/job/DetailJob';
import JobSection from '../../components/job/JobSection';
import { useJobs } from '../../hooks/useJobs';
import { NextSeo } from 'next-seo';

function Index() {
  const { getJobById } = useJobs();
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
            <JobSection session={undefined} />
          </>
        )}
      </MainLayout>
    </>
  );
}

export default Index;
