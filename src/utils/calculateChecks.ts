import { Job } from '../types/Jobtype';

const calculateChecks = (job: Job) => {
  const { preferential, qualification } = job;
  const totalArr = [...preferential, ...qualification];
  const sum = totalArr.reduce((prev, curr) => {
    if (curr.checked) {
      return prev + 1;
    }
    return prev;
  }, 0);

  const checkPercentage = sum / totalArr.length;
  return { ...job, checkPercentage };
};

export { calculateChecks };
