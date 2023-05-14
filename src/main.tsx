import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router";
import { ThemeProvider } from "styled-components";
import { appRouter } from "./routers/routers";
import GlobalStyle from "./styles/GlobalStyle";
import theme from "./styles/theme.ts";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={appRouter} />
    </ThemeProvider>
  </React.StrictMode>
);
