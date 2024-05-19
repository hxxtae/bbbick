import { SignupLayout } from './SignupLayout';
import { SignupForm } from './SignupForm';
import * as S from './style';
import { Link } from 'react-router-dom';

export const Signup = () => {
  return (
    <SignupLayout>
      <Link to={"/"}><S.Icon>BBBick</S.Icon></Link>
      <S.H1>회원가입</S.H1>
      <SignupForm />
    </SignupLayout>
  )
}