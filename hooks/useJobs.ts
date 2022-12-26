import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { useDBService } from '../context/DBContext';
import { Job, Jobs } from '../src/types/Jobtype';
import { User } from '../src/types/Authtypes';
import { JOBS_KEY } from '../src/variables/jobVariable';

export const useJobs = (user?: User) => {
  const dbService = useDBService();
  const queryClient = useQueryClient();
  const { query } = useRouter();
  const id = query.id?.toString() || '';

  const addOrUpdateJob = useMutation(
    async (job: Job) => {
      return dbService.addOrUpdateJob(job, user);
    },
    {
      onSuccess: () => {
        !user && queryClient.invalidateQueries([JOBS_KEY, 'all']);
        user && queryClient.invalidateQueries([JOBS_KEY, user]);
      },
    }
  );

  const deleteJob = useMutation(
    async (job: Job) => {
      return dbService.removeJob(job, user);
    },
    {
      onSuccess: () => {
        !user && queryClient.invalidateQueries([JOBS_KEY, 'all']);
        user && queryClient.invalidateQueries([JOBS_KEY, user]);
      },
    }
  );

  const getJobById = useQuery(
    [JOBS_KEY, user ? user : 'all'],
    () => dbService.getJobs(user),
    {
      select: (data: Jobs) => {
        return data[id];
      },
    }
  );

  const getFilteredJobs = useQuery(
    [JOBS_KEY, user ? user : 'all'],
    () => dbService.getJobs(user),
    {
      select: (data: Jobs) => {
        return Object.values(data).filter((item) => item.id !== id);
      },
    }
  );

  const getJobs = useQuery(
    [JOBS_KEY, user ? user : 'all'],
    () => dbService.getJobs(user),
    {
      select: (data: Jobs) => {
        return Object.values(data);
      },
    }
  );

  return { getJobs, addOrUpdateJob, deleteJob, getJobById, getFilteredJobs };
};
