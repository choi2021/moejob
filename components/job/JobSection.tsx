import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import Filters from './Filters';
import JobList from './JobList';

const Wrapper = styled.section`
  padding-top: 2rem;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  header {
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
  }
`;

const Btn = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  margin-left: 1rem;
`;

const Title = styled.h2`
  font-size: 1.2rem;
  line-height: 1.33;
  font-weight: 700;
`;

export default function JobSection() {
  const { pathname } = useRouter();
  const isHome = pathname === '/';
  const title = isHome ? '채용공고를 추가해보세요!' : '채용공고를 수정해보세요';
  return (
    <Wrapper>
      <header>
        <Title>{title}</Title>
        {!isHome && (
          <Btn href={'/admin/new'}>
            <AiOutlinePlusCircle />
          </Btn>
        )}
      </header>
      {/* <Filters /> */}
      <JobList />
    </Wrapper>
  );
}
