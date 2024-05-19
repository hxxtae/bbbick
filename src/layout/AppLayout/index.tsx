import { PropsWithChildren } from 'react'

import { CustomThemeProvider } from '@/components/provider/customThemeProvider'
import { QueryProvider } from '@/components/provider/queryProvider'
import { CssBaseline } from '@mui/material'
import * as S from './style';

export const AppLayout = ({ children }: PropsWithChildren) => {
  return (
    <QueryProvider>
      <CustomThemeProvider>
        <CssBaseline />
        <S.Wrapper>
          {/* <button onClick={setMode}>Theme</button> */}
          {children}
        </S.Wrapper>
      </CustomThemeProvider>
    </QueryProvider>
  )
}