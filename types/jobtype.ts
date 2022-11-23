type DescriptionType = string[];

export type JobType = {
  name: string;
  platform: string;
  id: number;
  mainWork: DescriptionType;
  qualification: DescriptionType;
  preferential: DescriptionType;
  url: string;
  img: string;
};
