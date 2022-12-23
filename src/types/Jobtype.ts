export type DescriptionKindType = 'mainWork' | 'qualification' | 'preferential';

export type Job = {
  name: string;
  platform: string;
  id: string;
  mainWork: DescriptionType[];
  qualification: DescriptionType[];
  preferential: DescriptionType[];
  url: string;
  img: string;
  checkPercentage: number;
  createdFrom: string;
};

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

export type Jobs = {
  [key: string]: Job;
};

export type DescriptionType = { text: string; checked?: boolean; id: string };
