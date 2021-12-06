import React from "react";
import { Container } from "./styles";

export const Input = ({ label, type, placeholder, error }) => {
    return (
        <Container>
            {label}
            <input type={type} placeholder={placeholder} />
            {error && <p>{error}</p>}
        </Container>
    );
};
