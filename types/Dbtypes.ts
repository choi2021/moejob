import { JobType, ModifiedJobType } from './jobtype';

export interface DBService {
  addJob: (job: ModifiedJobType) => Promise<void>;
  getJobs: () => Promise<JobType[]>;
  removeJob: (job: ModifiedJobType) => Promise<void>;
}
