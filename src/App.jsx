import React from "react";
import { DefaultContainer } from "./components/DefaultContainer";
import { Input } from "./components/Input";

export const App = () => {
    return (
        <DefaultContainer>
            <h1>React app</h1>

            <form action="">
                <Input type="text" placeholder="Your name" label="Name" />
            </form>
        </DefaultContainer>
    );
};
