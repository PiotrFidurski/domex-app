import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
    @media (max-width: 768px) {
    margin-bottom: 30px;
  }
  }
  a {
    text-decoration:none;
  }
`;

export default GlobalStyles;
