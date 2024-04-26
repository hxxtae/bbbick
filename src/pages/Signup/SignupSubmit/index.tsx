import * as S from './style';
import { Link } from 'react-router-dom';

export const SignupSubmit = () => {
  return (
    <S.Div>
      <Link to={"/signin"}><S.Login>로그인</S.Login></Link>
      <S.Submit type="submit" variant='contained'>회원가입</S.Submit>
    </S.Div>
  )
}