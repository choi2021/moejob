import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useRouter } from 'next/router';
import { useDBService } from '../context/DBContext';
import { Job, ModifiedJobsType, ModifiedJobType } from '../src/types/Jobtype';
import { User } from '../src/types/Authtypes';

const JOBS_KEY = 'jobs';

export const useJobs = (user?: User) => {
  const dbService = useDBService();
  const queryClient = useQueryClient();
  const getJobs = useQuery([JOBS_KEY, user], async () => {
    return dbService.getJobs(user);
  });
  const addOrUpdateJob = useMutation(
    async (job: Job) => {
      return dbService.addOrUpdateJob(job, user);
    },
    {
      onSuccess: () => {
        !user && queryClient.invalidateQueries([JOBS_KEY]);
        user && queryClient.invalidateQueries([JOBS_KEY, user]);
      },
    }
  );

  const deleteJob = useMutation(
    async (job: ModifiedJobType) => {
      return dbService.removeJob(job, user);
    },
    {
      onSuccess: () => {
        !user && queryClient.invalidateQueries([JOBS_KEY]);
        user && queryClient.invalidateQueries([JOBS_KEY, user]);
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

  return { getJobs, addOrUpdateJob, deleteJob };
};

export const useSpecificJobs = (user?: User) => {
  const { query } = useRouter();
  const { id } = query;
  const jobId = typeof id === 'string' ? id : id?.join() || '';
  const dbService = useDBService();
  const getFilteredJobs = useQuery(
    [JOBS_KEY, user],
    () => {
      return dbService.getJobs(user);
    },
    {
      select: (data: ModifiedJobsType) => {
        return Object.values(data).filter((item) => item.id !== id);
      },
      onError: (error) => {
        console.error(error);
      },
    }
  );

  const getJobById = useQuery(
    [JOBS_KEY, user],
    () => {
      if (!user) {
        return {};
      }
      return dbService.getJobs(user);
    },
    {
      select: (data: ModifiedJobsType) => {
        return data[jobId];
      },
      onError: (error) => {
        console.error(error);
      },
    }
  );

  return { getFilteredJobs, getJobById };
};
