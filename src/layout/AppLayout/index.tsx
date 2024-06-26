import { PropsWithChildren } from 'react'

import { CustomThemeProvider } from '@/components/provider/customThemeProvider'
import { QueryProvider } from '@/components/provider/queryProvider'
import CssBaseline from '@muiDom/CssBaseline'
import * as S from './style';

export const AppLayout = ({ children }: PropsWithChildren) => {
  return (
    <QueryProvider>
      <CustomThemeProvider>
        <CssBaseline />
        <S.Wrapper>
          {children}
        </S.Wrapper>
      </CustomThemeProvider>
    </QueryProvider>
  )
}