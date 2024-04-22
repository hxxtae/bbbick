import { Link } from 'react-router-dom';
import * as S from './style';

export const SignupSubmit = () => {
  return (
    <S.Div>
      <Link to={'/signin'}>로그인</Link>
      <S.Submit type="submit">회원가입</S.Submit>
    </S.Div>
  )
}