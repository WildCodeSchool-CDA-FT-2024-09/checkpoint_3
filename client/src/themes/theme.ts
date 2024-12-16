import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Bleu par défaut de MUI
    },
    secondary: {
      main: '#dc004e', // Rouge par défaut de MUI
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});

export default theme;
