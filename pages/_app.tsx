import { ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';
import { useState } from 'react';
import ConversionsContext from '../contexts/ConversionsContext';
import '../styles/globals.css';
import { IConversion } from '../types';
import { generateTheme } from '../utils/generateTheme';

const generatedTheme = generateTheme();

function MyApp({ Component, pageProps }: AppProps) {
  const [conversions, setConversions] = useState<IConversion[]>([]);
  const [currentConversion, setCurrentConversion] = useState<IConversion | null>(null);
  return <ThemeProvider theme={generatedTheme}>
    <ConversionsContext.Provider value={{currentConversion, setCurrentConversion, conversions, setConversions}}>
      <Component {...pageProps} />
    </ConversionsContext.Provider>
  </ThemeProvider>
}

export default MyApp
