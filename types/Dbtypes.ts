import { JobType } from './jobtype';

export interface DBService {
  addJob: (userId: string, job: JobType) => Promise<void>;
  getJobs: (userId: string) => () => void;
  removeJob: (userId: string, job: JobType) => Promise<void>;
}
