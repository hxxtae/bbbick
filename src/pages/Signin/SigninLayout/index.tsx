import { PropsWithChildren } from 'react';
import * as S from './style';

export const SigninLayout = ({ children }: PropsWithChildren) => {
  return (
    <S.Layout>
      {children}
    </S.Layout>
  )
}