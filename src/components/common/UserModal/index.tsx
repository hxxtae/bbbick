import { Link } from 'react-router-dom';

import { useSignout } from '@/hooks/auth/useSignout';
import ExitToAppIcon from '@icons/ExitToApp';
import { IAuth } from '@/interface/auth';
import Avatar from '@muiDom/Avatar';
import * as S from './style';

interface UserModalProps {
  user: IAuth;
  toggleModal?: () => void;
}

export const UserModal = ({ user, toggleModal }: UserModalProps) => {
  const { onSignout } = useSignout();

  return (
    <S.Section sx={{ bgcolor: "bg.modal" }}>
      <S.HeadBlock>
        <S.UserEmail>{user.email}</S.UserEmail>
        <S.UserProfile>
          <Avatar
            alt="Remy Sharp"
            src={user.profileImg ?? ''}
            sx={{ width: "50px", height: "50px"}}
          />
        </S.UserProfile>
        <S.UserName>안녕하세요, {user.nickname}님.</S.UserName>
        <Link to={"/mypage"}>
          <S.MoreBtn variant="outlined" onClick={toggleModal}>계정 관리</S.MoreBtn>
        </Link>
      </S.HeadBlock>
      <S.FootBlock>
        <S.UserInfoWrapper>
          <S.UserSignOut onClick={onSignout}>
            <ExitToAppIcon sx={{ mr: "8px" }} />로그아웃
          </S.UserSignOut>
        </S.UserInfoWrapper>
      </S.FootBlock>
      <S.AnyText>개인정보처리방침 · 서비스 약관</S.AnyText>
    </S.Section>
  )
}