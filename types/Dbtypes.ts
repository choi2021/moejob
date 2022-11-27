import { ModifiedJobsType, ModifiedJobType } from './jobtype';

export interface DBService {
  addJob: (job: ModifiedJobType) => Promise<void>;
  getJobs: () => Promise<ModifiedJobsType>;
  removeJob: (job: ModifiedJobType) => Promise<void>;
  updateJob: (job: ModifiedJobType) => Promise<void>;
}
