import styled, { css } from "styled-components";

export const Container = styled.button`
    border: none;
    outline: none;

    padding: 0.5em 1.25em;
    border-radius: 0.5em;
    font-weight: 500;

    color: ${(props) => props.theme.dark};

    transition: filter 200ms ease;

    &:hover,
    &:focus {
        filter: brightness(0.8);
        outline: 2px dotted #e7e7e7;
        outline-offset: 2px;
    }

    ${(props) =>
        props.primary &&
        css`
            background-color: ${(props) => props.theme.salmon};
        `}

    ${(props) =>
        props.secondary &&
        css`
            background-color: ${(props) => props.theme.blue};
        `}
`;
