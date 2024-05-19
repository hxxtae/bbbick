import { Close } from '@mui/icons-material';
import { createPortal } from 'react-dom';
import { cloneElement, useEffect, useRef } from 'react';

import * as S from './style';

interface PortalCloneProps {
  toggleModal?: () => void;
}

interface PortalLayoutProps extends PortalCloneProps {
  children: React.ReactNode;
}

interface PortalProps extends PortalCloneProps {
  children: React.ReactElement;
  parent?: Element;
}

const BoxPortalLayout = ({ children, toggleModal }: PortalLayoutProps) => {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const eventCallback = (e: MouseEvent): void => {
      // 조건1: 현재 ref.current가 존재하고, 
      // 조건2: e.target이 ref.current의 포괄적인 자식이면 true를 반환하고 아니면 false를 반환
      if (ref.current && !ref.current.contains(e.target as Node)) {
        toggleModal && toggleModal()
      }
    }
    document.addEventListener('mousedown', eventCallback)
    return () => document.removeEventListener('mousedown', eventCallback)
  }, []);

  return (
    <>
      <S.BoxSection ref={ref}>
        {children}
        <S.BoxCloseButton sx={{ color: "text.main" }} onClick={toggleModal}>
          <Close sx={{ width: 1, height: 1}} />
        </S.BoxCloseButton>
      </S.BoxSection>
    </>
  )
}

const SidePortalLayout = ({ children, toggleModal }: PortalLayoutProps) => {
  return (
    <>
      <S.Overlay sx={{ bgcolor: "text.main", opacity: .3}} />
      <S.SideSection sx={{
        bgcolor: "bg.main",
        borderLeft: 1,
        borderColor: "border.main",
        height: 1
      }}>
        {children}
        <S.SideCloseButton sx={{ color: "text.main" }} onClick={toggleModal}>
          <Close sx={{ width: 1, height: 1}} />
        </S.SideCloseButton>
      </S.SideSection>
    </>
  )
}

export const BoxNotPortal = ({ children, toggleModal }: PortalProps) => {
  return (
    <BoxPortalLayout toggleModal={toggleModal}>
      {cloneElement(children, {toggleModal})}
    </BoxPortalLayout>
  )
}

export const BoxPortal = ({ children, parent = document.body, toggleModal }: PortalProps) => {
  return createPortal(
    <BoxPortalLayout
      toggleModal={toggleModal}>
      {cloneElement(children, {toggleModal})}
    </BoxPortalLayout>,
    parent, "Box Modal"
  )
}

export const SidePortal = ({ children, parent = document.body, toggleModal }: PortalProps) => {
  return createPortal(
    <SidePortalLayout
      toggleModal={toggleModal}>
      {children}
    </SidePortalLayout>,
    parent, "Side Modal"
  )
}