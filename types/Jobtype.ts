export type DescriptionKindType = 'mainWork' | 'qualification' | 'preferential';

export interface JobType {
  name: string;
  platform: string;
  id: string;
  mainWork: string[];
  qualification: string[];
  preferential: string[];
  url: string;
  img: string;
}

export type DescriptionType = { text: string; checked?: boolean };

//상속으로 간단히 해보자
export type ModifiedJobType = {
  name: string;
  platform: string;
  id: string;
  mainWork: DescriptionType[];
  qualification: DescriptionType[];
  preferential: DescriptionType[];
  url: string;
  img: string;
  checkPercentage: number;
};

export type ModifiedJobsType = {
  [key: string]: ModifiedJobType;
};
