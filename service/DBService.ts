import { FirebaseApp } from 'firebase/app';
import { User } from 'firebase/auth';
import {
  Database,
  getDatabase,
  ref,
  set,
  remove,
  child,
  get,
} from 'firebase/database';
import { DBService } from '../types/DBtypes';
import { ModifiedJobsType, ModifiedJobType } from '../types/Jobtype';

export class DBServiceImpl implements DBService {
  db: Database;
  constructor(private app: FirebaseApp) {
    this.db = getDatabase(this.app);
  }

  async addJob(job: ModifiedJobType, user: User) {
    return set(ref(this.db, `users/${user.uid}/jobs/${job.id}`), job);
  }

  async updateJob(job: ModifiedJobType, user: User) {
    return set(ref(this.db, `users/${user.uid}/jobs/${job.id}`), job);
  }

  async getJobs(user: User): Promise<ModifiedJobsType> {
    const dbRef = ref(this.db);
    return get(child(dbRef, `users/${user.uid}/jobs`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          return snapshot.val();
        } else {
          return [];
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  async removeJob(job: ModifiedJobType, user: User) {
    return remove(ref(this.db, `users/${user.uid}/jobs/${job.id}`));
  }
}
