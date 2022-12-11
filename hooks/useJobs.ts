import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';
import { useRouter } from 'next/router';
import { useAuthService } from '../context/AuthContext';
import { useDBService } from '../context/DBContext';
import { ModifiedJobsType, ModifiedJobType } from '../types/Jobtype';
import { modifyJob } from '../utils/setChecks';
import { useEffect } from 'react';

const JOBS_KEY = 'jobs';

export const useJobs = () => {
  const { user } = useAuthService();
  const dbService = useDBService();
  const queryClient = useQueryClient();
  const getJobs = useQuery([JOBS_KEY], async () => {
    if (!user) {
      return null;
    }
    return dbService.getJobs(user);
  });
  const addJob = useMutation(
    async (url: string) => {
      if (!user) {
        return null;
      }
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_HOST}/api/job`,
        {
          url,
        }
      );
      const job = modifyJob(data);
      return dbService.addJob(job, user);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries([JOBS_KEY]);
      },
    }
  );

  const updateJob = useMutation(
    async (job: ModifiedJobType) => {
      if (!user) {
        return null;
      }
      return dbService.updateJob(job, user);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries([JOBS_KEY]);
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
      if (!user) {
        return null;
      }
      return dbService.removeJob(job, user);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries([JOBS_KEY]);
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

export const useSpecificJobs = () => {
  const { user } = useAuthService();
  const { query } = useRouter();
  const { id } = query;
  const dbService = useDBService();

  const getFilteredJobs = useQuery(
    [JOBS_KEY],
    () => {
      if (!user) {
        return {};
      }
      return dbService.getJobs(user);
    },
    {
      select: (data: ModifiedJobsType) => {
        if (!data) {
          return [];
        }
        return Object.values(data).filter((item) => item.id !== id);
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );
  useEffect(() => {
    getFilteredJobs.refetch();
  }, [user]);

  const jobId = typeof id === 'string' ? id : id?.join() || '';
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
    }
  );

  return { getFilteredJobs, getJobById };
};
