import { JobType, ModifiedJobType } from '../types/jobtype';

const addCheckToJob = (job: JobType): ModifiedJobType => {
  const preferential = job.preferential.map((item) => ({
    text: item,
    checked: false,
  }));
  const qualification = job.qualification.map((item) => ({
    text: item,
    checked: false,
  }));
  return { ...job, preferential, qualification };
};

export { addCheckToJob };
