import { createGlobalStyle } from "styled-components";

export const ResetCSS = createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    html:focus-within {
        scroll-behavior: smooth;
    }

    body {
        min-height: 100vh;
        text-rendering: optimizeSpeed;
        line-height: 1.5;
    }

    ul[role='list'],
    ol[role='list'] {
        list-style: none;
    }

    ul, ol {
        list-style: none;
    }

    a:not([class]) {
        text-decoration-skip-ink: auto;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    img,
    picture {
        max-width: 100%;
        display: block;
    }

    input,
    button,
    textarea,
    select {
        font: inherit;
        font-size: 1rem;
    }
    
    button {
        cursor: pointer;
    }
    
    /* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
    @media (prefers-reduced-motion: reduce) {
        html:focus-within {
            scroll-behavior: auto;
        }
        
        *,
        *::before,
        *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
        }
    }
`;
