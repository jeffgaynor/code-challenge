import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import '../styles/globals.css';
import { theme } from '../styles/Theme';

// See https://github.com/vercel/next.js/blob/canary/examples/with-styled-components/pages/_app.js

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
