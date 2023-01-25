import { createTheme } from '@mui/material/styles';

const ceTheme = createTheme({
  typography: {
    allVariants: {
      fontFamily: 'Roboto',
    },
    subtitle1: {
      fontSize: 12,
      fontWeight: 300,
    },
    body1: {
      fontSize: 24,
      fontWeight: 400,
    },
    h1: {
      fontSize: 48,
      fontWeight: 700,
    },
  },
  palette: {
    primary: {
      main: '#009688',
    },
    accent: {
      main: '#94C720',
    },
    warn: {
      main: '#C70D38',
    },
    defaultText: {
      main: '#404040',
    },
    tableHeader: {
      main: '#8D8D8D',
    },
  },
});

export default ceTheme;
