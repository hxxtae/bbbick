import { PaletteMode, ThemeOptions, colors } from '@mui/material';
import { typography } from '@mui/system';

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light' ? lightPalette : darkPalette),
  },
  typography: {
    ...typography,
    fontFamily: "'Noto Sans KR', sans-serif",
    fontSize: 14,
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
} as ThemeOptions
