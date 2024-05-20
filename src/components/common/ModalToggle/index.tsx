import AddIcon from '@icons/Add';
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
  classname?: string;
  absolute?: boolean;
  top?: string;
  right?: string;
  left?: string;
}

export const ButtonToggle = ({ children, toggleName, iconShow = true }: ModalToggleProps) => {
  const [open, setOpen] = useState(false);

  const toggleModal = () => {
    setOpen((prev) => !prev);
  }

  return (
    <div>
      <S.Add variant={'contained'} sx={{ fontSize: 14 }} onClick={toggleModal}>
        {iconShow && <AddIcon sx={{ mr: "5px" }} />}
        {toggleName}
      </S.Add>
      {open && cloneElement(children, { toggleModal })}
    </div>
  )
}

export const CustomToggle = ({ modalComponent, children, classname = "parent1", absolute = false, top, right, left }: CustomModalToggleProps) => {
  const [open, setOpen] = useState(false);

  const toggleModal = () => {
    setOpen((prev) => !prev);
  }

  if (absolute) {
    return (
      <div className={classname} style={{ position: "relative" }}>
        <div onClick={toggleModal}>
          {children}
        </div>
        <div style={{ position: "absolute", top, right, left }}>
          {open && cloneElement(modalComponent, { toggleModal })}
        </div>
      </div>
    )
  }

  return (
    <>
      <div className={classname} onClick={toggleModal}>
        {children}
      </div>
      {open && cloneElement(modalComponent, { toggleModal })}
    </>
  )
}
