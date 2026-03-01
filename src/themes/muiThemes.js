import { createTheme } from '@mui/material/styles';
import { blue, purple, red, green, grey } from '@mui/material/colors';


const typographyFonts = {
  fontFamily: 'Cairo, Arial, sans-serif',

  h1: {
    fontFamily: 'Alexandria, Cairo, sans-serif',
    fontWeight: 800,
  },
  h2: {
    fontFamily: 'Alexandria, Cairo, sans-serif',
    fontWeight: 700,
  },
  h3: {
    fontFamily: 'Alexandria, Cairo, sans-serif',
    fontWeight: 700,
  },
  h4: {
    fontFamily: 'Alexandria, Cairo, sans-serif',
    fontWeight: 600,
  },
  h5: {
    fontFamily: 'Alexandria, Cairo, sans-serif',
    fontWeight: 600,
  },
  h6: {
    fontFamily: 'Alexandria, Cairo, sans-serif',
    fontWeight: 500,
  },

  subtitle1: {
    fontWeight: 500,
  },
  subtitle2: {
    fontWeight: 500,
  },

  body1: {
    fontWeight: 400,
  },
  body2: {
    fontWeight: 400,
  },

  button: {
    fontFamily: 'Alexandria, Cairo, sans-serif',
    fontWeight: 600,
    textTransform: 'none',
  },
};

export const lightTheme = createTheme({
  palette: {
    mode: 'light',

    primary: {
      main: blue[600],
      light: blue[400],
      dark: blue[800],
    },

    secondary: {
      main: purple[500],
    },

    success: {
      main: green[600],
    },

    error: {
      main: red[600],
    },

    background: {
      default: grey[100],
      paper: '#ffffff',
    },

    text: {
      primary: grey[900],
      secondary: grey[700],
    },

    divider: grey[300],
  },
  typography:typographyFonts,
  


});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',

    primary: {
      main: blue[300],
      light: blue[200],
      dark: blue[500],
    },

    secondary: {
      main: purple[300],
    },

    success: {
      main: green[400],
    },

    error: {
      main: red[400],
    },

    background: {
      default: '#0f1214',
      paper: '#181c20',
    },

    text: {
      primary: '#ffffff',
      secondary: grey[400],
    },

    divider: '#2a2f36',
  },
  typography:typographyFonts,
  
});
