import 'styled-components';
import { ColorsTypes, FontSizeTypes } from './theme';
import { DefaultTheme } from './styeld.d';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: ColorsTypes;
    fontSize: FontSizeTypes;
  }
}
