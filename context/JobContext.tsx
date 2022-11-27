import React, { createContext, useContext, useState } from 'react';
import { JobType } from '../types/Jobtype';

type InitialStateType = {
  jobs: JobType[];
  setJobs: React.Dispatch<React.SetStateAction<JobType[]>>;
};

const JobContext = createContext<InitialStateType | undefined>(undefined);
export const JobProvider = ({ children }: { children: React.ReactNode }) => {
  const [jobs, setJobs] = useState<JobType[]>([]);
  return (
    <JobContext.Provider value={{ jobs, setJobs }}>
      {children}
    </JobContext.Provider>
  );
};

export const useJobs = () => {
  const context = useContext(JobContext);
  if (!context) {
    throw new Error('Not under DBProvider');
  }
  return context;
};
