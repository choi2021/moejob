import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
console.log();

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family:"Pretendard-bold" ;
  src: url("/fonts/Pretendard-Bold.woff2") format("woff2");
  font-weight: bold;
}
@font-face {
  font-family:"Pretendard-regular" ;
  src: url("/fonts/Pretendard-Regular.woff2") format("woff2");
  font-weight: 300;
}
  ${reset}
  *, *::before, *::after {
    box-sizing: border-box;
    font-family:"Pretendard-Regular";
  }

  body {
    font-family: "Pretendard-regular",sans-serif;
    line-height: 1.5;
    margin:0;
    color:${(props) => props.theme.colors.black}
  }
  h1{
    font-family: "Pretendard-bold";
  }
  input{
    outline: none;
    text-align: center;
  }

  button{
    cursor: pointer;
    background-color: transparent;
    border:none;
  }

  a{
    text-decoration: none;
    color:inherit;
  }
`;

export default GlobalStyle;
