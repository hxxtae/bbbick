import styled from "@emotion/styled";
import { Box, ButtonBase } from '@mui/material';

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
  position: fixed;
  top: 50px;
  right: 20px;
  width: 300px;
  max-width: 300px;
`;

export const BoxCloseButton = styled(ButtonBase)`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 24px;
  height: 24px;
  border-radius: 5px;
`;