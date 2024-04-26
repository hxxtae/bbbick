import { SigninForm } from './SigninForm';
import { SigninLayout } from './SigninLayout';
import * as S from './style';

export const Signin = () => {
  return (
    <SigninLayout>
      <S.Icon>BBBick</S.Icon>
      <S.H1>로그인</S.H1>
      <SigninForm />
    </SigninLayout>
  )
}
