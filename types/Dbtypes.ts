import { JobType, ModifiedJobType } from './jobtype';

export interface DBService {
  addJob: (userId: string, job: ModifiedJobType) => Promise<void>;
  getJobs: (userId: string) => Promise<JobType[]>;
  removeJob: (userId: string, job: ModifiedJobType) => Promise<void>;
}
