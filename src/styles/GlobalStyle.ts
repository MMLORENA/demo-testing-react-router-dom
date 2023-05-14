import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*, 
::before,
::after {
  box-sizing: border-box;
}

html {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

body {
  margin: 0;
}

h1,
h2,
h3 {
  margin: 0;
}
`;

export default GlobalStyle;
