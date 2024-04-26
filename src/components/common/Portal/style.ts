import styled from "@emotion/styled";
import { Box, ButtonBase } from '@mui/material';

export const Overlay = styled(Box)`
  position: fixed;
  inset: 0;
  overflow: hidden;
`;

export const Section = styled(Box)`
  position: fixed;
  top: 0;
  right: 0;
  max-width: 700px;
`;

export const CloseButton = styled(ButtonBase)`
  position: absolute;
  top: 10px;
  left: -60px;
  width: 40px;
  height: 40px;
  border-radius: 5px;
`;