import { useForm } from 'react-hook-form';

import { ISignup } from '@/interface/form';
import { SignupLayout } from './SignupLayout';
import { useSignup } from '@/hooks/form/useSignup';
import { SignupForm } from './SignupForm';
import { SignupSubmit } from './SignupSubmit';
import * as S from './style';

export const Signup = () => {
  const { register, handleSubmit, getValues, formState, setValue } = useForm<ISignup>();
  const { onSubmit } = useSignup()

  return (
    <SignupLayout>
      <S.Icon>BBBick</S.Icon>
      <S.H1>회원가입</S.H1>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
      <SignupForm register={register} getValues={getValues} formState={formState} setValue={setValue} />
        <SignupSubmit />
      </S.Form>
    </SignupLayout>
  )
}