import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';
import { useRouter } from 'next/router';
import { useDBService } from '../context/DBContext';
import { ModifiedJobsType, ModifiedJobType } from '../types/Jobtype';
import { modifyJob } from '../utils/setChecks';

const JOBS_KEY = 'jobs';

export const useGetJobs = () => {
  const dbService = useDBService();
  const { data: jobs, isLoading } = useQuery([JOBS_KEY], () =>
    dbService.getJobs()
  );
  return { jobs, isLoading };
};

export const useGetFilteredJobs = () => {
  const { query } = useRouter();
  const { id } = query;
  const dbService = useDBService();
  const { data: jobs, isLoading } = useQuery(
    [JOBS_KEY],
    () => dbService.getJobs(),
    {
      select: (data: ModifiedJobsType) => {
        return Object.values(data).filter((item) => item.id !== id);
      },
    }
  );
  return { jobs, isLoading };
};

//binding이 강해서 좀더 연결성을 떨어뜨려야 재사용 가능
export const useCreateJob = (
  setMessage: React.Dispatch<React.SetStateAction<string>>,
  setUrl: React.Dispatch<React.SetStateAction<string>>
) => {
  const dbService = useDBService();
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation(
    async (url: string) => {
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_HOST}/api/job`,
        {
          url,
        }
      );
      const job = modifyJob(data);
      dbService.addJob(job);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries([JOBS_KEY]);
        setMessage('');
      },
      onError: (error) => {
        if (error instanceof AxiosError) {
          const { response } = error;
          if (response) {
            setMessage(response.data.message);
          }
        }
      },
      onSettled: () => {
        setUrl('');
      },
    }
  );
  return { mutate, isLoading };
};

export const useUpdateJob = () => {
  const dbService = useDBService();
  const queryClient = useQueryClient();
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
  return mutate;
};

export const useDeleteJob = () => {
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
  return mutate;
};

export const useGetJobById = () => {
  const { query } = useRouter();
  const dbService = useDBService();
  const { id } = query;
  const jobId = typeof id === 'string' ? id : id?.join() || '';
  const { data, isLoading } = useQuery(
    [JOBS_KEY],
    () => {
      return dbService.getJobs();
    },
    {
      select: (data: ModifiedJobsType) => {
        return data[jobId];
      },
    }
  );
  return { data, isLoading };
};
