import { Link } from 'react-router-dom';
import * as S from './style';

export const SigninSubmit = () => {
  return (
    <S.Div>
      <Link to={'/signup'}><S.Signup>회원가입</S.Signup></Link>
      <S.Submit type="submit" variant='contained'>로그인</S.Submit>
    </S.Div>
  )
}