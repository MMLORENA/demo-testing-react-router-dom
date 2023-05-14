import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      base: string;
      light: string;
      dark: string;
      neutral: string;
    };
  }
}
