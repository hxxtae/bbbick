import { PaletteMode, colors } from '@mui/material';
import { typography } from '@mui/system';

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    ...(mode === 'light' ? lightPalette : darkPalette),
    mode,
  },
  typography: {
    ...typography,
    fontSize: 14,
  },
  breakpoints: {
    key: {
      0: "xs",
      1: "sm",
      2: "md",
      3: "lg",
      4: "xl"
    },
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536
    },
  },
});

const lightPalette = {
  primary: {
    main: '#0058F5',
    light: colors.blue[700],
    dark: colors.blue[700],
  },
  error: {
    main: colors.red[700],
    light: colors.red[300],
    dark: colors.red[700],
    contrastText: colors.common.white,
    bg: "#FFEEEE",
  },
  success: {
    main: '#13BD74',
    sub: '#23D387',
  },
  border: {
    main: '#E2E3E6',
  },
  bg: {
    main: '#FFFFFF',
    card: '#F0F2F4',
    modal: '#E9EEF6',
    modalSub: '#F8FAFD',
  },
  text: {
    main: '#111111',
    sub: '#BFC6D0',
  }
}

const darkPalette = {
  primary: {
    main: '#0058F5',
    light: colors.blue[700],
    dark: colors.blue[700],
  },
  error: {
    main: colors.red[500],
    light: colors.red[400],
    dark: colors.red[800],
    contrastText: colors.common.white,
    bg: "#353232",
  },
  success: {
    main: '#13BD74',
    sub: '#23D387',
  },
  border: {
    main: '#3F3F3F',
  },
  bg: {
    main: '#111111',
    card: '#1E1E1E',
    modal: '#282A2C',
    modalSub: '#1B1B1B',
  },
  text: {
    main: '#FFFFFF',
    sub: '#B3B3B3',
  },
}
