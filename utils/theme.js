import { createTheme } from '@mui/material';
import { themedata } from '../data/themedata';

const theme = createTheme({
  palette: {
    primary: {
      main: themedata[0].primary,
    },
    three: {
      main: themedata[0].three,
    },
    four: {
      main: themedata[0].four,
    },
    facebook: {
      main: themedata[0].facebook,
    },
    homepage: {
      main : themedata[0].homepage,
    },
    buttermilk: {
      main : themedata[0].buttermilk,
    },
    instagram: {
      main: '#E4405F',
    },
    youtube: {
      main: '#CD201F',
    },
    tracred: {
      main: '#dd1b24',
    },
    tracgreen: {
      main: '#14640A',
    },
    tracgreen2: {
      main: '#16ad03',
    },
    tracblack: {
      main: '#010101',
    },
    transparent: {
      main: 'transparent',
    },
    type: 'dark',
  },
});

export default theme;
