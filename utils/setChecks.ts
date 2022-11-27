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
  const checkPercentage = 0;
  return { ...job, preferential, qualification, checkPercentage };
};

const calculateChecks = (job: ModifiedJobType) => {
  const { preferential, qualification } = job;
  const total = preferential.length + qualification.length;
  const preferentailCount = preferential.reduce((prev, curr) => {
    if (curr.checked) {
      return prev + 1;
    }
    return prev;
  }, 0);
  const qualificationCount = qualification.reduce((prev, curr) => {
    if (curr.checked) {
      return prev + 1;
    }
    return prev;
  }, 0);
  const checkPercentage = (preferentailCount + qualificationCount) / total;
  return { ...job, checkPercentage };
};

export { addCheckToJob, calculateChecks };
