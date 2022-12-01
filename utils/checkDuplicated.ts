import { ModifiedJobsType } from '../types/Jobtype';

const checkDuplicated = (url: string, jobs: ModifiedJobsType): boolean => {
  const urls = Object.values(jobs).map((item) => item.url);
  return !urls.includes(url);
};

export { checkDuplicated };
