import React from 'react';
import styled from 'styled-components';
import { RiCheckboxBlankCircleFill } from 'react-icons/ri';
import { useQueryClient, useMutation, useQuery } from '@tanstack/react-query';
import { useDBService } from '../../context/DBContext';
import { ModifiedJobsType, ModifiedJobType } from '../../types/Jobtype';
import { AxiosError } from 'axios';
import { useRouter } from 'next/router';
import { Kinds } from '../../variables/jobVariable';
import { calculateChecks } from '../../utils/setChecks';

interface DescriptionItemProps {
  text: string;
  isMainJob: boolean;
  kind: string;
  checked?: boolean;
}

const List = styled.li`
  padding: 0.25rem 0rem;
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
  line-height: 1.5;
  svg,
  input {
    width: 0.5rem;
    margin-right: 0.5rem;
    cursor: pointer;
  }

  input {
    width: 0.8rem;
  }
`;

export default function DescriptionItem({
  text,
  isMainJob,
  checked,
  kind,
}: DescriptionItemProps) {
  const queryClient = useQueryClient();
  const dbService = useDBService();
  const { query } = useRouter();
  const { id } = query;
  const jobId = typeof id === 'string' ? id : id?.join() || '';
  const { data: job } = useQuery(
    ['jobs'],
    () => {
      return dbService.getJobs();
    },
    {
      select: (data: ModifiedJobsType) => {
        return data[jobId];
      },
    }
  );
  const { mutate } = useMutation(
    async (job: ModifiedJobType) => {
      return dbService.updateJob(job);
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
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = e.currentTarget;
    let modifiedJob;
    if (job) {
      if (kind === Kinds.qualification) {
        const qualification = [...job?.qualification].map((item) => {
          if (item.text === name) {
            return { ...item, checked: !item.checked };
          }
          return item;
        });
        modifiedJob = { ...job, qualification };
      } else {
        const preferential = [...job?.preferential].map((item) => {
          if (item.text === name) {
            return { ...item, checked: !item.checked };
          }
          return item;
        });
        modifiedJob = { ...job, preferential };
      }
      mutate(calculateChecks(modifiedJob));
    }
  };
  return (
    <List>
      {isMainJob && <RiCheckboxBlankCircleFill />}
      {!isMainJob && (
        <input
          type="checkbox"
          name={text}
          checked={checked}
          onChange={handleChange}
        />
      )}
      <span>{text}</span>
    </List>
  );
}
