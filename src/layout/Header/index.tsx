import { Link } from 'react-router-dom';

import { ThemeButton } from '@/components/common/ThemeButton';
import { useAuthStore } from '@/store/useAuthStore';
import { CustomToggle } from '@/components/common/ModalToggle';
import { UserModal } from '@/components/common/UserModal';
import { BoxPortal } from '@/components/common/Portal';
import * as S from './style';
import { Typography } from '@mui/material';

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
        <ThemeButton />
        {auth ? 
          <CustomToggle modalComponent={<BoxPortal><UserModal user={auth} /></BoxPortal>}>
            <S.UserImage alt="User Image" src={auth?.profileImg ?? ''} />
          </CustomToggle> :
          <Link to={"/signin"}>
            <Typography sx={{ fontSize: "14px" }}>로그인</Typography>
          </Link>}
      </S.Right>
    </S.Section>
  )
}