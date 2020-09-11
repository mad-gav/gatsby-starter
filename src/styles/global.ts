import { normalize } from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';

const GlobalStyling = createGlobalStyle`
  ${normalize};
  *{
    box-sizing: border-box;
  }
`;

export default GlobalStyling;
