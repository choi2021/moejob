import React, { useState } from 'react';
import { RiCheckboxBlankCircleFill } from 'react-icons/ri';
import { useQueryClient, useMutation, useQuery } from '@tanstack/react-query';
import { useDBService } from '../../../context/DBContext';
import {
  DescriptionKindType,
  ModifiedJobsType,
  ModifiedJobType,
} from '../../../types/Jobtype';
import { AxiosError } from 'axios';
import { useRouter } from 'next/router';
import { calculateChecks } from '../../../utils/setChecks';
import S from './styles';

interface DescriptionItemProps {
  text: string;
  isMainJob: boolean;
  kind: DescriptionKindType;
  checked?: boolean;
}

export default function DescriptionItem({
  text,
  isMainJob,
  checked,
  kind,
}: DescriptionItemProps) {
  const [isChecked, setIsChecked] = useState(checked);
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
    setIsChecked(!isChecked);
    if (job) {
      if (!isMainJob) {
        const targetList = [...job[kind]].map((item) => {
          if (item.text === name) {
            return { ...item, checked: !item.checked };
          }
          return item;
        });
        const modifiedJob = { ...job, [kind]: targetList };
        mutate(calculateChecks(modifiedJob));
      }
    }
  };
  return (
    <S.Wrapper>
      {isMainJob && <RiCheckboxBlankCircleFill />}
      {!isMainJob && (
        <input
          type="checkbox"
          name={text}
          checked={isChecked}
          onChange={handleChange}
        />
      )}
      <span>{text}</span>
    </S.Wrapper>
  );
}
