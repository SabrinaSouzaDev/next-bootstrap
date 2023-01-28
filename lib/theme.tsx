import { Roboto } from '@next/font/google';
import { createTheme } from '@mui/material/styles';
import { red, blue, lightBlue } from '@mui/material/colors';

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});



// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: blue[900],
      light: '#757ce8',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      main: lightBlue[900],
      light: '#ff7961',
      dark: '#ba000d',
      contrastText: '#000',
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

export default theme;