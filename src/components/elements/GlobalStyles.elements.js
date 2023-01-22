import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    font-size: 18px;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  };

  body {
    background-color: #f0f0f0;
    min-height: 100vh;
  };
`;

export default GlobalStyle;
