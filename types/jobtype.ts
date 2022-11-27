type DescriptionType = string[];

export interface JobType {
  name: string;
  platform: string;
  id: number;
  mainWork: DescriptionType;
  qualification: DescriptionType;
  preferential: DescriptionType;
  url: string;
  img: string;
}

export type CheckedDescriptionType = {
  text: string;
  checked: boolean;
};

//상속으로 간단히 해보자
export type ModifiedJobType = {
  name: string;
  platform: string;
  id: number;
  mainWork: DescriptionType;
  qualification: CheckedDescriptionType[];
  preferential: CheckedDescriptionType[];
  url: string;
  img: string;
  checkPercentage: number;
};

export type ModifiedJobsType = {
  [key: string]: ModifiedJobType;
};
