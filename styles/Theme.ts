import { createGlobalStyle, DefaultTheme } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`;

export const theme: DefaultTheme = {
  colors: {
    primary: '#3F9F9E',
    secondary: '#E5E5E5',
    highlight: '#FF9900',
    text: {
      primary: '#37332C',
      secondary: '#37332C',
    },
  },
  fonts: {
    primary: {
      family: `'Roboto', sans-serif`,
      style: 'normal',
      weight: 400,
    },
    secondary: {
      family: `'Times', serif`,
      style: 'normal',
      weight: 400,
    },
  },
};
