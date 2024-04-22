import { FormState, UseFormGetValues, UseFormRegister, UseFormSetValue } from 'react-hook-form';

import { emailValidate, passwordValidate } from '@/utils/regexps';
import { SignUpCol, SignUpRow } from '@/components/form/InputGroup'
import { ISignup } from '@/interface/form';


interface SignupFormProps {
  register: UseFormRegister<ISignup>;
  getValues: UseFormGetValues<ISignup>
  formState: FormState<ISignup>;
  setValue?: UseFormSetValue<ISignup>;
}

export const SignupForm = ({ register, getValues, formState }: SignupFormProps) => {
  return (
    <>
      <SignUpCol>
        <SignUpCol.Title title="이메일 주소" id='email' />
        <SignUpCol.Input id="email" type="text" resister={register("email", {
          required: "필수 입력값 입니다.",
          validate: (v: string) => emailValidate(v) || "올바른 형식이 아닙니다.",
        })} />
        <SignUpCol.Error error={formState.errors.email?.message}/>
      </SignUpCol>
      <SignUpCol>
        <SignUpCol.Title title="비밀번호" id='password' />
        <SignUpCol.Input id="password" type="password" resister={register("password", {
          required: "필수 입력값 입니다.",
          validate: (v: string) => passwordValidate(v) || "영문, 숫자, 특수문자 중 2가지 이상 조합으로 입력해 주세요."
        })} />
        <SignUpCol.Error error={formState.errors.password?.message} />
      </SignUpCol>
      <SignUpCol>
        <SignUpCol.Title title="비밀번호 확인" id='passwordConfirm' />
        <SignUpCol.Input id="passwordConfirm" type="password" resister={register("passwordConfirm", {
          required: "필수 입력값 입니다.",
          validate: (value) => getValues('password') === value || "비밀번호가 다릅니다."
        })} />
        <SignUpCol.Error error={formState.errors.passwordConfirm?.message} />
      </SignUpCol>
      <SignUpCol>
        <SignUpCol.Title title="이름" id='name' />
        <SignUpCol.Input id="name" type="text" resister={register("nickname", {
          required: "필수 입력값 입니다."
        })} />
        <SignUpCol.Error error={formState.errors.nickname?.message}/>
      </SignUpCol>
      <SignUpRow>
        <SignUpRow.Check id="authType" resister={register("authType")} />
        <SignUpRow.Title title="판매자로 회원가입" id="authType" />
      </SignUpRow>
    </>
  )
}
