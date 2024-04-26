import { useForm } from 'react-hook-form';

import { Check, Group, InputPassword, InputText, Title } from '@/components/form/Input';
import { emailValidate, passwordValidate } from '@/utils/regexps';
import { useSignup } from '@/hooks/form/useSignup';
import { SignupSubmit } from '../SignupSubmit';
import { ISignup } from '@/interface/form';
import * as S from './style';

const Signup = Object.assign(Group, {
  InputText,
  InputPassword,
  Check,
  Title
})

export const SignupForm = () => {
  const { register, handleSubmit, getValues, formState: { errors } } = useForm<ISignup>();
  const { onSubmit } = useSignup();

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      <Signup>
        <Signup.InputText type="text" title="이메일" helperText={errors.email?.message} resister={register("email", {
          required: "필수 입력값 입니다.",
          validate: (v: string) => emailValidate(v) || "올바른 형식이 아닙니다.",
        })} />
      </Signup>
      <Signup>
        <Signup.InputPassword type="password" title="비밀번호" helperText={errors.password?.message} resister={register("password", {
          required: "필수 입력값 입니다.",
          validate: (v: string) => passwordValidate(v) || "영문, 숫자, 특수문자 중 2가지 이상 조합으로 입력해 주세요."
        })} />
      </Signup>
      <Signup>
        <Signup.InputPassword type="password" title="비밀번호 확인" helperText={errors.passwordConfirm?.message} resister={register("passwordConfirm", {
          required: "필수 입력값 입니다.",
          validate: (value) => getValues('password') === value || "비밀번호가 다릅니다."
        })} />
      </Signup>
      <Signup>
        <Signup.InputText type="text" title="닉네임" helperText={errors.nickname?.message} resister={register("nickname", {
          required: "필수 입력값 입니다."
        })} />
      </Signup>
      <Signup>
        <S.Col>
          <Signup.Check id="authType" resister={register("authType")} />
          <Signup.Title id="authType" title="판매자로 회원가입"/>
        </S.Col>
      </Signup>
      <SignupSubmit />
    </S.Form>
  )
}
