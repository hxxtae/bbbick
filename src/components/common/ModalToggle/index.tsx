import { Add } from '@mui/icons-material';
import { cloneElement, useState } from 'react'

import * as S from './style';

interface ModalToggleProps {
  toggleName: string;
  children: React.ReactElement;
}

export const ModalToggle = ({ children, toggleName }: ModalToggleProps) => {
  const [open, setOpen] = useState(false);

  const toggleModal = () => {
    setOpen((prev) => !prev);
  }

  return (
    <div>
      <S.Add variant={'contained'} sx={{ fontSize: 14}} onClick={toggleModal}>
        <Add sx={{ mr: "5px" }} />
        {toggleName}
      </S.Add>
      {open && cloneElement(children, { toggleModal })}
    </div>
  )
}