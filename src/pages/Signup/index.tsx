import { SignupLayout } from './SignupLayout';
import { SignupForm } from './SignupForm';
import * as S from './style';

export const Signup = () => {
  return (
    <SignupLayout>
      <S.Icon>BBBick</S.Icon>
      <S.H1>회원가입</S.H1>
      <SignupForm />
    </SignupLayout>
  )
}