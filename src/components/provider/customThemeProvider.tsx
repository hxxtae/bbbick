import { useTheme } from '@/hooks/common/useTheme';
import { getDesignTokens } from '@/styles/theme';
import { ThemeProvider, createTheme } from '@mui/material';

interface CustomThemeProviderProps {
  children: React.ReactNode;
}

export const CustomThemeProvider = ({ children }: CustomThemeProviderProps) => {
  const { mode } = useTheme();
  const theme = createTheme(getDesignTokens(mode));

  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}