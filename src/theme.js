import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#FF941A',
    },
    secondary: {
      main: '#51C452',
    },
    error: {
      main: red.A400,
    },
    text: {
      primary: '#1C1C1C',
    },
  },
  typography: {
    fontFamily: '"Open Sans", sans-serif',
  },
});

export default theme;
