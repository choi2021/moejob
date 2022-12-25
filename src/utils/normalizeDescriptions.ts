import uuid from 'react-uuid';
import { DescriptionType } from '../types/Jobtype';
type RawDescriptionsType = {
  mainWork: string;
  qualification: string;
  preferential: string;
};

type NormalizedDescriptionsType = {
  mainWork: DescriptionType[];
  qualification: DescriptionType[];
  preferential: DescriptionType[];
  [index: string]: DescriptionType[];
};

export const normalizeDescriptions = (
  descriptions: RawDescriptionsType
): NormalizedDescriptionsType => {
  const result: NormalizedDescriptionsType = {
    mainWork: [],
    qualification: [],
    preferential: [],
  };
  const reg = /[•-]/gi;
  for (const [key, value] of Object.entries(descriptions)) {
    const text = value.replace(reg, '').trim();
    const items = text.split('\n');
    const normalizedItems = items.map((item) => {
      return { id: uuid(), text: item, checked: false };
    });
    result[key] = normalizedItems;
  }
  return result;
};
