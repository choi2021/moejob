import React from 'react';
import styled from 'styled-components';
import DetailJob from '../../components/DetailJob';
import JobList from '../../components/JobList';
import Layout from '../../components/MainLayout';

const JobListBox = styled.section`
  max-width: 1000px;
`;

export default function index() {
  return (
    <Layout>
      <DetailJob />
      <JobListBox>
        <JobList />
      </JobListBox>
    </Layout>
  );
}
