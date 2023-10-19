import '../styles/globals.css'
import theme from '../utils/theme'
import { Box, ThemeProvider } from '@mui/material'

export default function App({ Component, pageProps, }) {
  const { user } = pageProps;
  return ( 
    <Box>
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider> 
    </Box>
   );
 }

 