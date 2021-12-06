import { createGlobalStyle } from "styled-components";

export const GlobalCSS = createGlobalStyle`
    * {
        font-family: 'Poppins', sans-serif;
    }

    body {
        background-color: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.dark};
    }

    html {
        font-size: 87.5%;

        @media (min-width: 45em){
            font-size: 93.75%;
        }

        @media (min-width: 67.5em){
            font-size: 100%;
        }
    }
    
    h1,h2,h3,h4,h5,h6 {
        font-weight: 600;
    }

    [disabled] {
        opacity: .8;
        cursor: not-allowed;
    }
`;
