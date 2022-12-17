import React from 'react';
import styled from 'styled-components';
import Filters from './Filters';
import JobList from './JobList';

const Wrapper = styled.section`
  padding-top: 2rem;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 1.2rem;
  line-height: 1.33;
  font-weight: 700;
  margin-bottom: 2rem;
`;

export default function JobSection() {
  return (
    <Wrapper>
      <Title>채용공고 확인하고 추가해보세요!</Title>
      {/* <Filters /> */}
      <JobList />
    </Wrapper>
  );
}
