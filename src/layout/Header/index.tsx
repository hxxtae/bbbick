import { Link } from 'react-router-dom';

import { ThemeButton } from '@/components/common/ThemeButton';
import { useAuthStore } from '@/store/useAuthStore';
import { CustomToggle } from '@/components/common/ModalToggle';
import { UserModal } from '@/components/common/UserModal';
import { BoxNotPortal } from '@/components/common/Portal';
import Typography from '@muiDom/Typography';
import * as S from './style';

export const Header = () => {
  const auth = useAuthStore((state) => state.auth);

  return (
    <S.Section>
      <S.Left>
        <Link to={"/"}>
          <S.Img src={`${import.meta.env.BASE_URL}assets/image/BBBick_title.png`}></S.Img>
        </Link>
      </S.Left>
      <S.Right>
        <ThemeButton />
        {auth ? 
          <CustomToggle
            modalComponent={<BoxNotPortal><UserModal user={auth} /></BoxNotPortal>}
            absolute={true}
            top="40px"
            right="270px"
          >
            <S.UserImage alt="User Image" src={auth?.profileImg ?? ''} />
          </CustomToggle> :
          <Link to={"/signin"}>
            <Typography sx={{ fontSize: "14px" }}>로그인</Typography>
          </Link>}
      </S.Right>
    </S.Section>
  )
}