import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { MdRemove } from 'react-icons/md';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import Link from 'next/link';
import { ModifiedJobType } from '../../types/Jobtype';
import { useDBService } from '../../context/DBContext';

const Wrapper = styled.div`
  width: 100%;
  margin: auto;
  height: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  cursor: pointer;
  a {
    width: 100%;
  }
`;

const Badge = styled.div`
  left: -10px;
  top: -10px;
  padding: 0.25rem 0.5rem;
  background-color: lightblue;
  margin-right: 0.5rem;
  font-size: 0.8rem;
  border-radius: 0.25rem;
  position: absolute;
  line-height: 25px;
  @media screen and (max-width: 700px) {
    font-size: 0.6rem;
    padding: 0.1rem 0.25rem;
  }
`;

const Box = styled.div`
  margin-top: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-weight: bold;
    font-size: 1rem;
  }
`;

const Img = styled(Image)`
  width: 100%;
`;

const DeleteBtn = styled.button`
  right: -5px;
  top: -5px;
  font-size: 1rem;
  position: absolute;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  color: white;
  background-color: ${(props) => props.theme.colors.black};
`;

export default function JobItem({ job }: { job: ModifiedJobType }) {
  const { name, platform, img, checkPercentage } = job;
  const queryClient = useQueryClient();
  const dbService = useDBService();
  const { mutate } = useMutation(
    async (job: ModifiedJobType) => {
      return dbService.removeJob(job);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['jobs']);
      },
      onError: (error) => {
        if (error instanceof AxiosError) {
          const { response } = error;
          if (response) {
            console.log(response);
          }
        }
      },
    }
  );
  const handleDelete = () => {
    mutate(job);
  };
  const over50Percent = checkPercentage >= 0.5;

  return (
    <Wrapper>
      {over50Percent && <Badge>50% 이상</Badge>}
      <DeleteBtn onClick={handleDelete}>
        <MdRemove />
      </DeleteBtn>
      <Link href={`/jobs/${job.id}`}>
        <Img src={img} alt="job" width="200" height="180" priority />
        <Box>
          <h1>{name}</h1>
          <h3>{platform}</h3>
        </Box>
      </Link>
    </Wrapper>
  );
}
