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
import { DBService } from '../types/DBtypes';
import { ModifiedJobsType, ModifiedJobType } from '../types/Jobtype';
import { UserId } from '../variables/authVariable';

export class DBServiceImpl implements DBService {
  db: Database;
  constructor(private app: FirebaseApp) {
    this.db = getDatabase(this.app);
  }

  addJob(job: ModifiedJobType) {
    const userId = localStorage.getItem(UserId);
    return set(ref(this.db, `users/${userId}/jobs/${job.id}`), job);
  }

  updateJob(job: ModifiedJobType) {
    const userId = localStorage.getItem(UserId);
    return set(ref(this.db, `users/${userId}/jobs/${job.id}`), job);
  }

  async getJobs(): Promise<ModifiedJobsType> {
    const userId = localStorage.getItem(UserId);
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

  removeJob(job: ModifiedJobType) {
    const userId = localStorage.getItem(UserId);
    return remove(ref(this.db, `users/${userId}/jobs/${job.id}`));
  }
}
