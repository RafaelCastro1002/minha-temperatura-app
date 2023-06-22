import { ThemeProvider } from "styled-components";
import colors from "./palletColor";

const theme = {
  colors, 
};

const Theme = ({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

export default Theme;
