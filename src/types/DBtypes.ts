import { User } from './Authtypes';
import { ModifiedJobsType, ModifiedJobType } from './Jobtype';

export interface DBService {
  addJob: (job: ModifiedJobType, user: User) => Promise<void>;
  getJobs: (user?: User) => Promise<ModifiedJobsType>;
  removeJob: (job: ModifiedJobType, user: User) => Promise<void>;
  updateJob: (job: ModifiedJobType, user: User) => Promise<void>;
}
