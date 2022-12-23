import { User } from './Authtypes';
import { Jobs, Job } from './Jobtype';

export interface DBService {
  addOrUpdateJob: (job: Job, user?: User) => Promise<void>;
  getJobs: (user?: User) => Promise<Jobs>;
  removeJob: (job: Job, user?: User) => Promise<void>;
}
