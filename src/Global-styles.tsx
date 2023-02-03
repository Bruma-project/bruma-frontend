import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    border: none;
    text-decoration: none;
    box-sizing: border-box;
  }

  body {
    width: 100vw;
    min-height: 100vh;
    
    font-size: 16px;
  }
`;
