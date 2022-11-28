import React from 'react';
import MainLayout from '../components/job/MainLayout';
import SEO from '../components/SEO';
import MainContent from './../components/job/MainContent';

export default function Home() {
  return (
    <MainLayout>
      <SEO title={'모으잡'} />
      <MainContent />
    </MainLayout>
  );
}
