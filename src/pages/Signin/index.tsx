import { useForm } from 'react-hook-form';

import { SigninForm } from './SigninForm';
import { SigninLayout } from './SigninLayout';
import { useSignin } from '@/hooks/form/useSignin';
import { SigninSubmit } from './SigninSubmit';
import { ISignin } from '@/interface/form';
import * as S from './style';

export const Signin = () => {
  const { register, handleSubmit } = useForm<ISignin>();
  const { onSubmit } = useSignin()

  return (
    <SigninLayout>
      {/* NOTE: Icon으로 변경 예정 */}
      <S.Icon>BBBick</S.Icon>
      <S.H1>로그인</S.H1>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <SigninForm register={register} />
        <SigninSubmit />
      </S.Form>
    </SigninLayout>
  )
}
