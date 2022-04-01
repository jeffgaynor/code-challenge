import 'styled-components';

export type Colors = {
  primary: string;
  secondary: string;
  highlight?: string;
};

export type Font = {
  family: string;
  style: string;
  weight: number;
};

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Colors & {
      text: Colors;
    };
    fonts: {
      primary: Font;
      secondary: Font;
    };
  }
}
