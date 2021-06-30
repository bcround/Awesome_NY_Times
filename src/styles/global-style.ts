import { create } from 'domain';
import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  /* Add global style below if you need */
`;

export default GlobalStyle;
