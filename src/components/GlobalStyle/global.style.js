import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
   * {
        box-sizing: border-box;
    }
    body {
        font-size: 1rem;
        font-family: "Montserrat", sans-serif;
        margin: 0;
        padding: 0;
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
