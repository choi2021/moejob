import { Jobs } from '../types/Jobtype';

const checkDuplicated = (url: string, jobs: Jobs): boolean => {
  const urls = Object.values(jobs).map((item) => item.url);
  return !urls.includes(url);
};

export { checkDuplicated };
