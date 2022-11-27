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

type CheckedDescriptionType = {
  text: string;
  checked: boolean;
};

export interface ModifiedJobType {
  name: string;
  platform: string;
  id: number;
  mainWork: DescriptionType;
  qualification: CheckedDescriptionType[];
  preferential: CheckedDescriptionType[];
  url: string;
  img: string;
}
