import { DefaultTheme } from 'styled-components';

const colors = {
  white: 'white',
  blue: 'black',
  black: '#333',
  gray: '#888',
  lightGray: '#f2f4f7',
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
