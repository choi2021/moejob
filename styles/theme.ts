import { DefaultTheme } from 'styled-components';

const colors = {
  white: 'white',
  blue: '#07BED1',
  black: '#333',
  gray: '#888',
  lightGray: '#F9FAFB',
  mainColor: 'lightcoral',
};

const fontSize = {
  text: '16px',
};

export const theme: DefaultTheme = {
  colors,
  fontSize,
};

export type ColorsTypes = {
  white: string;
  blue: string;
  black: string;
  gray: string;
  lightGray: string;
  mainColor: string;
};

export type FontSizeTypes = {
  text: string;
};
