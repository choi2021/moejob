import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { JobType } from '../types/Jobtype';

const Wrapper = styled.div`
  width: 100%;
  height: 20rem;
  max-width: 200px;
  margin: 0 1rem;
  display: flex;
  flex-direction: column;
  text-align: center;
  position: relative;
<<<<<<< HEAD
  h1 {
    margin: 0 1rem;
  }
=======
  cursor: pointer;
>>>>>>> 631588b (feat: firebase를 이용해 email/password 회원가입/로그인 기능 추가)
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
<<<<<<< HEAD
    margin: 0 1rem;
  }
  img {
    width: 70px;
=======
    margin-right: 0.5rem;
    font-weight: bold;
>>>>>>> 631588b (feat: firebase를 이용해 email/password 회원가입/로그인 기능 추가)
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
      <Img src={img} alt="job" width="200" height="180" />
      <Box>
        <h1>{name}</h1>
        <h3>{platform}</h3>
      </Box>
    </Wrapper>
  );
}
