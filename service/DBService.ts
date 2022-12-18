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
import { User } from '../src/types/Authtypes';
import { DBService } from '../src/types/DBtypes';
import { Job, ModifiedJobsType, ModifiedJobType } from '../src/types/Jobtype';

export class DBServiceImpl implements DBService {
  db: Database;
  constructor(private app: FirebaseApp) {
    this.db = getDatabase(this.app);
  }

  async getJobs(user?: User): Promise<ModifiedJobsType> {
    const dbRef = ref(this.db);
    const query = user ? `users/${user?.id}/` : '';
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

  async addOrUpdateJob(job: ModifiedJobType, user?: User) {
    const query = user ? `users/${user?.id}/` : '';
    return set(ref(this.db, `${query}jobs/${job.id}`), job);
  }

  async removeJob(job: ModifiedJobType, user?: User) {
    const query = user ? `users/${user?.id}/` : '';
    return remove(ref(this.db, `${query}jobs/${job.id}`));
  }
}
