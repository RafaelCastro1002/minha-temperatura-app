import {} from "styled-components";

interface CustomTheme {
  colors: WeatherTheme.colors;
}

declare module "styled-components" {
  export interface DefaultTheme extends CustomTheme {} // extends the global DefaultTheme with our ThemeType.
}
