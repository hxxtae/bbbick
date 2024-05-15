import { Add } from '@mui/icons-material';
import { cloneElement, useState } from 'react'

import * as S from './style';

interface ModalToggleProps {
  toggleName: string;
  children: React.ReactElement;
  iconShow?: boolean;
}

interface CustomModalToggleProps {
  modalComponent: React.ReactElement;
  children: React.ReactElement;
}

export const ButtonToggle = ({ children, toggleName, iconShow = true }: ModalToggleProps) => {
  const [open, setOpen] = useState(false);

  const toggleModal = () => {
    setOpen((prev) => !prev);
  }

  return (
    <div>
      <S.Add variant={'contained'} sx={{ fontSize: 14 }} onClick={toggleModal}>
        {iconShow && <Add sx={{ mr: "5px" }} />}
        {toggleName}
      </S.Add>
      {open && cloneElement(children, { toggleModal })}
    </div>
  )
}

export const CustomToggle = ({ modalComponent, children }: CustomModalToggleProps) => {
  const [open, setOpen] = useState(false);

  const toggleModal = () => {
    setOpen((prev) => !prev);
  }

  return (
    <>
      <div className="profile" onClick={toggleModal}>
        {children}
      </div>
      {open && cloneElement(modalComponent, { toggleModal })}
    </>
  )
}