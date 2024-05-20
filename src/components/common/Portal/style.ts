import styled from "@emotion/styled";
import Box from '@muiDom/Box';
import ButtonBase from '@muiDom/Box';

export const Overlay = styled(Box)`
  position: fixed;
  inset: 0;
  overflow: hidden;
`;

export const SideSection = styled(Box)`
  position: fixed;
  top: 0;
  right: 0;
  max-width: 700px;
`;

export const SideCloseButton = styled(ButtonBase)`
  position: absolute;
  top: 10px;
  left: -60px;
  width: 40px;
  height: 40px;
  border-radius: 5px;
`;

export const BoxSection = styled(Box)`
  position: absolute;
  max-width: 280px;
  width: 280px;
  z-index: 1;
`;

export const BoxCloseButton = styled(ButtonBase)`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 24px;
  height: 24px;
  border-radius: 5px;
  z-index: 1;
`;