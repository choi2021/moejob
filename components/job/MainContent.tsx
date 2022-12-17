import React from 'react';
import styled from 'styled-components';
import Banner from './Banner';
import JobSection from './JobSection';

const Layout = styled.div`
  max-width: 1000px;
  width: 100%;
  height: 100%;
`;

export default function MainContent() {
  return (
    <Layout>
      <Banner />
      <JobSection />
    </Layout>
  );
}
