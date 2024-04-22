import { UseFormRegister } from 'react-hook-form';

import { SignIn } from '@/components/form/InputGroup'
import { ISignin } from '@/interface/form';


interface SigninFormProps {
  register: UseFormRegister<ISignin>;
}

export const SigninForm = ({ register }: SigninFormProps) => {
  return (
    <>
      <SignIn>
        <SignIn.Title title="이메일 주소" id='email' />
        <SignIn.Input id="email" type="text" resister={register("email")} />
      </SignIn>
      <SignIn>
        <SignIn.Title title="비밀번호" id='password' />
        <SignIn.Input id="password" type="password" resister={register("password")} />
      </SignIn>
    </>
  )
}