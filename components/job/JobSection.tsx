import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import Filters from './Filters';
import JobList from './JobList';
import { Session } from 'next-auth';
import { getTitle } from '../../src/utils/getTitle';

const Wrapper = styled.section`
  padding-top: 2rem;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  header {
    margin-bottom: 2rem;
    display: flex;
    align-items: center;
    margin-bottom: rem;
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

export default function JobSection({
  session,
}: {
  session: Session | undefined;
}) {
  const { pathname } = useRouter();
  const isAdmin = pathname === '/admin';
  const title = getTitle(pathname);
  return (
    <Wrapper>
      <header>
        <Title>{title}</Title>
        {isAdmin && (
          <Btn href={'/admin/new'}>
            <AiOutlinePlusCircle />
          </Btn>
        )}
      </header>
      {/* <Filters /> */}
      <JobList session={session} />
    </Wrapper>
  );
}
