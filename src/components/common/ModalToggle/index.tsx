import { Add } from '@mui/icons-material';
import { cloneElement, useState } from 'react'

import * as S from './style';

interface ModalToggleProps {
  toggleName: string;
  children: React.ReactElement;
  iconShow?: boolean;
}

export const ModalToggle = ({ children, toggleName, iconShow = true }: ModalToggleProps) => {
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