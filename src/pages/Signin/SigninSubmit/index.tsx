import { Link } from 'react-router-dom';
import * as S from './style';

export const SigninSubmit = () => {
  return (
    <S.Div>
      <Link to={'/signup'}>회원가입</Link>
      <S.Submit type="submit">로그인</S.Submit>
    </S.Div>
  )
}