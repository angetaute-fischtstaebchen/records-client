import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
   * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body {
        font-family: "Montserrat", sans-serif;       
    }
    a {
        text-decoration: none;

        &:visited {
            color: inherit
        }
        &:hover {
            text-decoration: underline
        }
    }
`;
