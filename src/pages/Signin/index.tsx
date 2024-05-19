import { Link } from 'react-router-dom';
import { SigninForm } from './SigninForm';
import { SigninLayout } from './SigninLayout';
import * as S from './style';

export const Signin = () => {
  return (
    <SigninLayout>
      <Link to={"/"}><S.Icon>BBBick</S.Icon></Link>
      <S.H1>로그인</S.H1>
      <SigninForm />
    </SigninLayout>
  )
}
