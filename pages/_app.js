import '../styles/globals.css'
import theme from '../utils/theme'
import { Box, ThemeProvider } from '@mui/material'
import { MyProvider } from '@/context';
import { SessionProvider } from 'next-auth/react';
import localFont from 'next/font/local';

const cooper = localFont({
  src: [
    {
      path: '../public/fonts/Metropolis/Metropolis-Bold.otf',
      weight: "900",
    },
    {
      path: '../public/fonts/Metropolis/Metropolis-Regular.otf',
      weight: "400",
    },
  ],
});
export default function App({ Component, pageProps, }) {
  const { user } = pageProps;
  return ( 
    <Box>
      <style jsx global>{`
        :root {
          --cooper-font: ${cooper.style.fontFamily};
        }
      `}</style>
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

 