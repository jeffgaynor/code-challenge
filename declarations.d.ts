// styled.d.ts
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      highlight: string;
      text: {
        primary: string;
        secondary: string;
      };
    };
  }
}