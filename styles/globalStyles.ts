import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    font-family: "Helvetica", "Arial", sans-serif;
    line-height: 1.5;
    margin:0;
  }
  button{
    cursor: pointer;
    background-color: transparent;
    border:none;
  }
`;

export default GlobalStyle;
