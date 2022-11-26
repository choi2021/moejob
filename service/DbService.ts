import { FirebaseApp } from 'firebase/app';
import {
  Database,
  getDatabase,
  onValue,
  ref,
  set,
  off,
  remove,
} from 'firebase/database';
import { DBService } from '../types/Dbtypes';
import { JobType } from '../types/jobtype';

export class DBServiceImpl implements DBService {
  db: Database;
  constructor(private app: FirebaseApp) {
    this.db = getDatabase(this.app);
  }

  addJob(userId: string, job: JobType) {
    return set(ref(this.db, `users/${userId}/jobs/${job.id}`), job);
  }

  getJobs(userId: string) {
    const dbRef = ref(this.db, `users/${userId}/jobs`);
    onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      return data;
    });
    return () => off(dbRef);
  }

  removeJob(userId: string, job: JobType) {
    return remove(ref(this.db, `users/${userId}/jobs/${job.id}`));
  }
}
