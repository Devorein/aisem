import { ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';
import '../styles/globals.css';
import { generateTheme } from '../utils/generateTheme';

const generatedTheme = generateTheme();

function MyApp({ Component, pageProps }: AppProps) {
  return <ThemeProvider theme={generatedTheme}>
    <Component {...pageProps} />
  </ThemeProvider>
}

export default MyApp
