import { User } from './Authtypes';
import { ModifiedJobsType, ModifiedJobType } from './Jobtype';

export interface DBService {
  addOrUpdateJob: (job: ModifiedJobType, user?: User) => Promise<void>;
  getJobs: (user?: User) => Promise<ModifiedJobsType>;
  removeJob: (job: ModifiedJobType, user?: User) => Promise<void>;
}
