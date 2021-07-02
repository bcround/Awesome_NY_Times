import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  /* Add global style below if you need */
  html {
    font-size: 10px;
    background-color: #f8f9fa;
  }
  body,
  body *,
  body::before,
  body::after,
  body *::before,
  body *::after {
    box-sizing: border-box;
  }
  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
