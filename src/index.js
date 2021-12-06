import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { ThemeProvider } from "styled-components";

import { ResetCSS } from "./common/ResetCSS";
import { GlobalCSS } from "./common/GlobalCSS";
import { theme } from "./common/theme";

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <ResetCSS />
            <GlobalCSS />
        </ThemeProvider>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);
