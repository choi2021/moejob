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
  const addJob = useMutation(
    async (job: Job) => {
      return dbService.addJob(job, user);
    },
    {
      onSuccess: () => {
        !user && queryClient.invalidateQueries([JOBS_KEY]);
        user && queryClient.invalidateQueries([JOBS_KEY, user]);
      },
    }
  );

  const updateJob = useMutation(
    async (job: ModifiedJobType) => {
      return dbService.updateJob(job, user);
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

  return { getJobs, addJob, updateJob, deleteJob };
};

export const useSpecificJobs = (user?: User) => {
  const { query } = useRouter();
  const { id } = query;
  const jobId = typeof id === 'string' ? id : id?.join() || '';
  const dbService = useDBService();
  const getFilteredJobs = useQuery(
    [JOBS_KEY],
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
    [JOBS_KEY],
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
