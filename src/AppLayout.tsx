import { PropsWithChildren, useMemo } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { useTheme } from './hooks/useTheme'
import { getDesignTokens } from './styles/theme'

export const AppLayout = ({ children }: PropsWithChildren) => {
  const { mode } = useTheme();
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}