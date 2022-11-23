import React from 'react';
import { JobType } from '../types/jobtype';
import styled from 'styled-components';
import Image from 'next/image';

const Wrapper = styled.div`
  width: 25%;
  height: 20rem;
  max-width: 200px;
  margin: 0 1rem;
  display: flex;
  flex-direction: column;
  text-align: center;
  position: relative;
  h1 {
    margin: 0 1rem;
  }
`;

const Badge = styled.div`
  left: -10px;
  top: -10px;
  width: 25px;
  height: 25px;
  background-color: lightcoral;
  position: absolute;
  line-height: 25px;
  border-radius: 50%;
  color: white;
`;

const Box = styled.div`
  margin-top: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    margin: 0 1rem;
  }
  img {
    width: 70px;
  }
`;

const Img = styled(Image)`
  width: 100%;
`;

export default function JobItem({ job }: { job: JobType }) {
  const { name, platform, img } = job;
  return (
    <Wrapper>
      <Badge>1</Badge>
      <Img src={img} alt='job' width='200' height='180' />
      <Box>
        <h1>{name}</h1>
        <Img src={'/wanted_logo.png'} width='100' height='50' alt='platform' />
      </Box>
    </Wrapper>
  );
}
