import { PropsWithChildren } from 'react';
import * as S from './style';

export const SignupLayout = ({ children }: PropsWithChildren) => {
  return (
    <S.Layout>
      {children}
    </S.Layout>
  )
}