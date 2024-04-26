import { Close } from '@mui/icons-material';
import { createPortal } from 'react-dom';

import * as S from './style';

interface PortalCloneProps {
  toggleModal?: () => void;
}

interface PortalLayoutProps extends PortalCloneProps {
  children: React.ReactNode;
}

interface PortalProps extends PortalCloneProps {
  children: React.ReactNode;
  parent?: Element;
}

const PortalLayout = ({ children, toggleModal }: PortalLayoutProps) => {
  return (
    <>
      <S.Overlay sx={{ bgcolor: "text.main", opacity: .3}} />
      <S.Section sx={{
        bgcolor: "bg.main",
        borderLeft: 1,
        borderColor: "border.main",
        height: 1
      }}>

        {children}
        <S.CloseButton sx={{ color: "text.main" }} onClick={toggleModal}>
          <Close sx={{ width: 1, height: 1}} />
        </S.CloseButton>
      </S.Section>
    </>
  )
}

export const Portal = ({ children, parent = document.body, toggleModal }: PortalProps) => {
  return createPortal(
    <PortalLayout
      toggleModal={toggleModal}>
      {children}
    </PortalLayout>,
    parent, "Side Modal"
  )
}