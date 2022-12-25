export type DescriptionNameType = 'mainWork' | 'qualification' | 'preferential';
export type DescriptionTitle = '주요 업무' | '자격 요건' | '우대 사항';
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
  // createdFrom: string; 자기가 만든건 바로 추가되게 구성
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
