import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: #fff;

    @media (prefers-color-scheme: dark) {
      background-color: #262626;
      color: #fff;
    }
  }

  #root {
    position: relative;
  }
`;
