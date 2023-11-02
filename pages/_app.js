import '../styles/globals.css'
import theme from '../utils/theme'
import { Box, ThemeProvider } from '@mui/material'
import { MyProvider } from '@/context';
import { SessionProvider } from 'next-auth/react';

export default function App({ Component, pageProps, }) {
  const { user } = pageProps;
  return ( 
    <Box>
    <ThemeProvider theme={theme}>
    <SessionProvider session={pageProps.session}>
      <MyProvider>
      <Component {...pageProps} />
      </MyProvider>
      </SessionProvider>
    </ThemeProvider> 
    </Box>
   );
 }

 