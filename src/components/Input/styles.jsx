import styled from "styled-components";

export const Container = styled.label`
    display: block;
    width: 100%;
    font-size: 1rem;
    font-weight: 500;

    input {
        outline: none;
        border: none;

        background-color: ${(props) => props.theme.light};
        color: ${(props) => props.theme.dark};

        display: block;
        width: 100%;

        font-size: 1rem;
        font-weight: 400;

        margin-top: 0.15em;
        padding: 0.5em 1em;

        border-radius: 0.5em;
        border: 1px solid ${(props) => props.theme.salmon};

        transition: border-color 300ms;

        &:hover,
        &:focus {
            border-color: ${(props) => props.theme.blue};
        }

        &::placeholder {
            opacity: 0.8;
        }
    }

    p {
        color: lightcoral;
        font-weight: 400;
        font-size: 1rem;
        margin-top: 0.5em;
    }
`;
