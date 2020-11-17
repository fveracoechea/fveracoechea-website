import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    text: {
      primary: '#2b2b2b',
      secondary: '#f2f2f2',
    },
    primary: {
      main: '#4682b4',
    },
    secondary: {
      main: '#2b2b2b',
    },
    error: {
      main: '#d9534f',
    },
    background: {
      default: '#f2f2f2',
    },
  },
  typography: {
    fontFamily: [
      'Raleway',
      'sans-serif',
    ].join(','),
  },
  overrides: {
    MuiTooltip: {
      tooltip: {
        fontSize: '.8rem',
      },
    },
  },
});

export default responsiveFontSizes(theme);
