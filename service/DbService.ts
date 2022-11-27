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
import { DBService } from '../types/Dbtypes';
import { JobType, ModifiedJobType } from '../types/jobtype';

export class DBServiceImpl implements DBService {
  db: Database;
  constructor(private app: FirebaseApp) {
    this.db = getDatabase(this.app);
  }

  addJob(userId: string, job: ModifiedJobType) {
    return set(ref(this.db, `users/${userId}/jobs/${job.id}`), job);
  }

  updateJob(userId: string, job: ModifiedJobType) {
    return set(ref(this.db, `users/${userId}/jobs/${job.id}`), job);
  }

  getJobs(userId: string): Promise<JobType[]> {
    const dbRef = ref(this.db);
    return get(child(dbRef, `users/${userId}/jobs`))
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

  removeJob(userId: string, job: ModifiedJobType) {
    return remove(ref(this.db, `users/${userId}/jobs/${job.id}`));
  }
}
