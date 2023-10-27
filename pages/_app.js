import '../styles/globals.css'
import theme from '../utils/theme'
import { Box, ThemeProvider } from '@mui/material'
import { MyProvider } from '@/context';

export default function App({ Component, pageProps, }) {
  const { user } = pageProps;
  return ( 
    <Box>
    <ThemeProvider theme={theme}>
      <MyProvider>
      <Component {...pageProps} />
      </MyProvider>
    </ThemeProvider> 
    </Box>
   );
 }

 