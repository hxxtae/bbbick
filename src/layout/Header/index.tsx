import { Link } from 'react-router-dom';

import { ThemeButton } from '@/components/common/ThemeButton';
import { useAuthStore } from '@/store/useAuthStore';
import * as S from './style';

export const Header = () => {
  const auth = useAuthStore((state) => state.auth);

  return (
    <S.Section>
      <S.Left>
        <Link to={"/"}>
          <S.Logo sx={{ color: "primary.main"}}>BBBick</S.Logo>
        </Link>
      </S.Left>
      <S.Right>
        <ThemeButton/>
        <S.UserID>{ auth?.email }</S.UserID>
        <S.UserImage alt="User Image" src="" />
      </S.Right>
    </S.Section>
  )
}