import { PropsWithChildren } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'

import { useTheme } from '@/hooks/common/useTheme'
import { getDesignTokens } from '@/styles/theme'
import { CssBaseline } from '@mui/material'
import * as S from './style';

export const AppLayout = ({ children }: PropsWithChildren) => {
  const { mode } = useTheme();
  const theme = createTheme(getDesignTokens(mode))

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <S.Wrapper>
        {/* <button onClick={setMode}>Theme</button> */}
        {children}
      </S.Wrapper>
    </ThemeProvider>
  )
}