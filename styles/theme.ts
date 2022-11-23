import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  colors: {
    white: 'white',
    blue: 'black',
    black: 'blue',
  },
  fontSize: {
    text: '16px',
  },
};

export type ColorsTypes = {
  white: string;
  blue: string;
  black: string;
};

export type FontSizeTypes = {
  text: string;
};
