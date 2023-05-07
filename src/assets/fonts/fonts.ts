import { createGlobalStyle } from "styled-components";

import BoldFont from "./Roboto-Bold.ttf";
import BoldItalicFont from "./Roboto-BoldItalic.ttf";
import ItalicFont from "./Roboto-Italic.ttf";
import LightFont from "./Roboto-Light.ttf";
import RegularFont from "./Roboto-Regular.ttf";

const FontStyles = createGlobalStyle`
    @font-face {
        font-family: 'bold';
        src: url(${BoldFont});
    }

    @font-face {
        font-family: 'bold italic';
        src: url(${BoldItalicFont});
    }

    @font-face {
        font-family: 'italic';
        src: url(${ItalicFont});
    }

    @font-face {
        font-family: 'light';
        src: url(${LightFont});
    }

    @font-face {
        font-family: 'regular';
        src: url(${RegularFont});
    }
`;

export default FontStyles;
