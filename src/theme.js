import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#F46733', // Акцентный оранжевый цвет
      light: '#FF8A5B',
      dark: '#C44A1A',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#C41E3A', // Красный цвет
      light: '#E04A5A',
      dark: '#9A1629',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#0A0A0A', // Черный фон
      paper: '#FFFFFF',
    },
    text: {
      primary: '#333333',
      secondary: '#666666',
    },
    grey: {
      50: '#F5F5F5',
      100: '#EEEEEE',
      200: '#E0E0E0',
      300: '#BDBDBD',
      400: '#999999',
      500: '#757575',
      600: '#666666',
      700: '#424242',
      800: '#212121',
      900: '#0A0A0A',
    },
  },
  typography: {
    fontFamily: "'Inter', 'Roboto', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    h1: {
      fontFamily: "'Righteous', cursive",
      fontSize: '3.5rem',
      fontWeight: 400,
      color: '#D4AF37',
      letterSpacing: '0.02em',
      textTransform: 'uppercase',
    },
    h2: {
      fontFamily: "'Righteous', cursive",
      fontSize: '2.5rem',
      fontWeight: 400,
      color: '#D4AF37',
      letterSpacing: '0.02em',
      textTransform: 'uppercase',
    },
    h3: {
      fontFamily: "'Righteous', cursive",
      fontSize: '1.8rem',
      fontWeight: 400,
      color: '#D4AF37',
      letterSpacing: '0.01em',
    },
    h4: {
      fontFamily: "'Righteous', cursive",
      fontWeight: 400,
      color: '#D4AF37',
      letterSpacing: '0.01em',
    },
    h5: {
      fontFamily: "'Righteous', cursive",
      fontWeight: 400,
      color: '#D4AF37',
      letterSpacing: '0.01em',
    },
    h6: {
      fontFamily: "'Righteous', cursive",
      fontWeight: 400,
      color: '#D4AF37',
      letterSpacing: '0.01em',
    },
    body1: {
      fontFamily: "'Inter', sans-serif",
      fontWeight: 400,
    },
    body2: {
      fontFamily: "'Inter', sans-serif",
      fontWeight: 400,
    },
    button: {
      fontFamily: "'Inter', sans-serif",
      textTransform: 'none',
      fontWeight: 600,
      fontSize: '1.1rem',
      letterSpacing: '0.02em',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '4px',
          padding: '1rem 2rem',
          fontSize: '1.1rem',
          fontWeight: 600,
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
        contained: {
          '&:hover': {
            transform: 'translateY(-2px)',
            transition: 'transform 0.3s',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          transition: 'transform 0.3s',
          '&:hover': {
            transform: 'translateY(-5px)',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '&:hover fieldset': {
              borderColor: '#F46733',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#F46733',
            },
          },
        },
      },
    },
  },
})

export default theme

