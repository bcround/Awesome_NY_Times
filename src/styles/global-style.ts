import { createGlobalStyle, css } from 'styled-components';
import { reset } from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
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
  a {
    text-decoration: none;
    color:inherit;
  }
  a:visited {
    color: inherit; 
  }
`;

export const a11yHiddenStyle = css`
  overflow: hidden;
  position: absolute;
  clip: rect(0, 0, 0, 0);
  clip-path: circle(0);
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
`;
