import { FirebaseApp } from 'firebase/app';
import {
  Database,
  getDatabase,
  ref,
  set,
  remove,
  child,
  get,
} from 'firebase/database';
import { User } from '../types/Authtypes';
import { DBService } from '../types/DBtypes';
import { ModifiedJobsType, ModifiedJobType } from '../types/Jobtype';

export class DBServiceImpl implements DBService {
  db: Database;
  constructor(private app: FirebaseApp) {
    this.db = getDatabase(this.app);
  }

  async getJobs(user?: User): Promise<ModifiedJobsType> {
    const dbRef = ref(this.db);
    const query = user ? `users/${user?.email}/` : '';
    return get(child(dbRef, `${query}jobs`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          return snapshot.val();
        } else {
          return {};
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  async addJob(job: ModifiedJobType, user: User) {
    return set(ref(this.db, `users/${user?.email}/jobs/${job.id}`), job);
  }

  async updateJob(job: ModifiedJobType, user: User) {
    return set(ref(this.db, `users/${user?.email}/jobs/${job.id}`), job);
  }

  async removeJob(job: ModifiedJobType, user: User) {
    return remove(ref(this.db, `users/${user?.email}/jobs/${job.id}`));
  }
}
