import { JobType, ModifiedJobType } from '../types/Jobtype';

const modifyJob = (job: JobType): ModifiedJobType => {
  const mainWork = job.mainWork.map((item) => ({
    text: item,
  }));
  const preferential = job.preferential.map((item) => ({
    text: item,
    checked: false,
  }));
  const qualification = job.qualification.map((item) => ({
    text: item,
    checked: false,
  }));
  const checkPercentage = 0;
  return { ...job, mainWork, preferential, qualification, checkPercentage };
};

const calculateChecks = (job: ModifiedJobType) => {
  const { preferential, qualification } = job;
  const totalArr = [...preferential, ...qualification];
  const sum = totalArr.reduce((prev, curr) => {
    if (curr.checked) {
      return prev + 1;
    }
    return prev;
  }, 0);

  const checkPercentage = sum / totalArr.length;
  console.log(sum);
  return { ...job, checkPercentage };
};

export { modifyJob, calculateChecks };
