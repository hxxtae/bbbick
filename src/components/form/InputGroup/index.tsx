import { UseFormRegisterReturn } from 'react-hook-form'
import { PropsWithChildren } from 'react';

import * as S from './style';

interface InputProps {
  id: string;
  type: string;
  resister: UseFormRegisterReturn;
  placeholder?: string;
}

interface CheckProps {
  id: string;
  resister: UseFormRegisterReturn;
}

interface TitleProps {
  title: string
  id: string
}

interface MessageProps {
  error?: string
}

export const Container = ({ children }: PropsWithChildren) => {
  return (
    <S.ColBox>{ children }</S.ColBox>
  )
}

export const RowContainer = ({ children }: PropsWithChildren) => {
  return (
    <S.RowBox>{ children }</S.RowBox>
  )
}

export const Input = ({ id, type, placeholder, resister }: InputProps) => {
  return (
    <S.InputBox
      id={id}
      type={type}
      placeholder={placeholder}
      autoComplete='off'
      {...resister}
    />
  )
}

export const Check = ({ id, resister }: CheckProps) => {
  return (
    <S.CheckBox id={id} {...resister} />
  )
}

export const Title = ({ title, id }: TitleProps) => {
  return (
    <S.Title htmlFor={id}>{title}</S.Title>
  )
}

export const Error = ({ error }: MessageProps) => {
  return (
    <>
      {error ? <S.Message>{error}</S.Message> : null}
    </>
  )
}

export const SignIn = Object.assign(Container, {
  Input,
  Title,
  Error,
})

export const SignUpCol = Object.assign(Container, {
  Input,
  Title,
  Error,
  Check
})

export const SignUpRow = Object.assign(RowContainer, {
  Title,
  Check
})