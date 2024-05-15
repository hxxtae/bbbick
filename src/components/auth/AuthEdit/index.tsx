import { ChevronRight, Edit } from '@mui/icons-material';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

import { Group, InputPassword, InputText, Title } from '@/components/form/Input';
import { useSetAuth } from '@/hooks/auth/useSetAuth';
import * as S from './style';

const Profile = Object.assign(Group, {
  Title,
  InputText,
  InputPassword
})

interface AuthEmailProps {
  email: string | null;
}

interface AuthNickNameForm {
  nickname: string;
}

interface AuthNickNameProps {
  nickname: string | null;
}

interface AuthProfileImgProps {
  edit: boolean;
  children: React.ReactNode;
}

export const AuthEmail = ({ email }: AuthEmailProps) => {
  return (
    <S.EditBox>
      <Profile.Title title='이메일' id='email' />
      <S.EditRow>
        <S.EditText>
          {email}
        </S.EditText>
      </S.EditRow>
    </S.EditBox>
  )
}

export const AuthNickName = ({ nickname }: AuthNickNameProps) => {
  const [edit, setEdit] = useState(false);
  const { register, handleSubmit } = useForm<AuthNickNameForm>();
  const { setAuthNickName } = useSetAuth();

  const showEditHandler = () => {
    setEdit((prev) => !prev)
  }

  const onSubmit = ({ nickname }: AuthNickNameForm) => {
    setAuthNickName(nickname);
  }

  return (
    <S.EditBox>
      <Profile.Title title='닉네임' id='nickname' />
      {edit ? (
        <S.InputForm onSubmit={handleSubmit(onSubmit)}>
          <Profile.InputText type="text" id="nickname" resister={register("nickname", {
            required: true,
            maxLength: 10,
            value: nickname ?? ''
          })} />
          <S.BtnGroup>
            <S.CancelBtn variant="outlined" onClick={showEditHandler}>취소</S.CancelBtn>
            <S.SaveBtn variant="contained" type="submit">저장</S.SaveBtn>
          </S.BtnGroup>
        </S.InputForm>
      ) : (
        <S.EditRow onClick={showEditHandler}>
          <S.EditText>
            {nickname}
          </S.EditText>
          <ChevronRight />
        </S.EditRow>
      )}
    </S.EditBox>
  )
}

export const AuthPassword = () => {
  const { setAuthPassword } = useSetAuth();

  const onSubmit = () => {
    setAuthPassword();
  }

  return (
    <S.EditBox>
      <Profile.Title title='비밀번호' id='password' />
      <S.EditRow onClick={onSubmit}>
        <S.EditText>
          메일로 변경하기
        </S.EditText>
        <ChevronRight />
      </S.EditRow>
    </S.EditBox>
  )
}

export const AuthProfileImage = ({ edit, children }: AuthProfileImgProps) => {
  const { setAuthProfileImg } = useSetAuth();

  if (edit) {
    return (
      <S.Label htmlFor='profileImage' onChange={setAuthProfileImg}>
        <S.IconBox><Edit sx={{ width: "14px", height: "14px"}}/></S.IconBox>
        {children}
        <input type='file' multiple id="profileImage" style={{ display: 'none' }} accept=".jpg,.jpeg,.png" />
      </S.Label>
    )
  }

  return (
    <>
      {children}
    </>
  )
}