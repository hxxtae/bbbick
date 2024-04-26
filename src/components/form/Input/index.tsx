import { UseFormRegisterReturn } from 'react-hook-form';
import { FormControl, MenuItem } from '@mui/material';
import { PropsWithChildren } from 'react';

import * as S from './style';

interface OptionType {
  [key: string]: any;
}

interface ResisterProps {
  resister: UseFormRegisterReturn;
}

interface InputDefaultProps {
  title?: string;
  id?: string;
  helperText?: string;
}

type InputProps = {
  type: "text" | "email" | "password" | "number" | "file" | "textarea";
} & ResisterProps & InputDefaultProps;

interface CheckProps extends ResisterProps {
  id: string;
}

interface SelectProps extends ResisterProps {
  options: OptionType[];
  helperText?: string;
}

interface InputTitleProps {
  title: string;
  id: string;
}

export const InputText = ({ resister, ...config }: InputProps) => {
  return <S.Input variant="outlined" label={config.title} autoComplete='off' error={!!config.helperText} {...config} {...resister} />
}

export const InputPassword = ({ resister, ...config }: InputProps) => {
  return <S.Input variant="outlined" label={config.title} error={!!config.helperText} {...config} {...resister} />
}

export const InputTextArea = ({ resister, ...config }: InputProps) => {
  return <S.Input variant="outlined" label={config.title} multiline rows={4} autoComplete='off' error={!!config.helperText} {...config} {...resister} />
}

export const Check = ({ resister, ...config }: CheckProps) => {
  return <S.CheckBox {...config} {...resister} />
}

export const Select = ({ resister, options }: SelectProps) => {
  return (
    <FormControl>
      <S.SelectBox variant="outlined" defaultValue={options[0].KEY} {...resister}>
        {options.map((option) => (
          <MenuItem key={option.KEY} value={option.KEY}>
            {option.VALUE}
          </MenuItem>
        ))}
      </S.SelectBox>
    </FormControl>
  )
}

export const Title = ({ title, id }: InputTitleProps) => {
  return <S.Title htmlFor={id} >{title}</S.Title>
}

export const Group = ({ children }: PropsWithChildren) => {
  return (
    <S.Group>{ children }</S.Group>
  )
}
