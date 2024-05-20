import Avatar from '@muiDom/Avatar';
import { useState } from 'react';

import { AuthEmail, AuthNickName, AuthPassword, AuthProfileImage } from '../AuthEdit';
import { useAuthStore } from '@/store/useAuthStore';
import * as S from './style';

export const AuthProfile = () => {
  const auth = useAuthStore((state) => state.auth)
  const [visitEdit, setVisitEdit] = useState(false);

  const onToggleEdit = () => {
    setVisitEdit((prev) => !prev);
  }

  return (
    <S.ProfileBlock>
      <S.SubTitle>내 프로필</S.SubTitle>
      <S.Profile>
        <S.Row>
          <S.ProfileImg>
            <AuthProfileImage edit={visitEdit}>
              <Avatar alt={auth?.nickname ?? ''} src={auth?.profileImg ?? ''} sx={{ width: "50px", height: "50px"}} />
            </AuthProfileImage>
          </S.ProfileImg>
          <S.ProfileName>{auth?.nickname ?? null}</S.ProfileName>
          <S.ProfileSetting variant="outlined" onClick={onToggleEdit}>설정</S.ProfileSetting>
        </S.Row>
        {visitEdit &&
          (
          <S.ProfileEdit>
            <AuthEmail email={auth?.email ?? null} />
            <AuthNickName nickname={auth?.nickname ?? null} />
            <AuthPassword />
          </S.ProfileEdit>
        )}
      </S.Profile>
    </S.ProfileBlock>
  )
}