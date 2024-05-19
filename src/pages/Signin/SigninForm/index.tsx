import { useForm } from 'react-hook-form';

import { Group, InputPassword, InputText } from '@/components/form/Input';
import { emailValidate, passwordValidate } from '@/utils/regexps';
import { useSignin } from '@/hooks/auth/useSignin';
import { SigninSubmit } from '../SigninSubmit';
import { ISignin } from '@/interface/form';
import * as S from './style';

const Signin = Object.assign(Group, {
  InputText,
  InputPassword,
})

export const SigninForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<ISignin>();
  const { onSubmit } = useSignin();

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      <Signin>
        <Signin.InputText type="text" title="이메일" helperText={errors.email?.message} resister={register("email", {
          required: "필수 입력값 입니다.",
          validate: (v: string) => emailValidate(v) || "올바른 형식이 아닙니다.",
        })} />
      </Signin>
      <Signin>
        <Signin.InputPassword type="password" title="비밀번호" helperText={errors.password?.message} resister={register("password", {
          required: "필수 입력값 입니다.",
          validate: (v: string) => passwordValidate(v) || "영문, 숫자, 특수문자 중 2가지 이상 조합으로 입력해 주세요."
        })} />
      </Signin>
      <SigninSubmit />
    </S.Form>
  )
}