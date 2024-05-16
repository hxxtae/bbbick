import styled from 'styled-components';
import { Box } from "@mui/material"

export const Wrapper = styled(Box)<{ $fixed: boolean }>`
  position: ${({ $fixed }) => $fixed ? "fixed" : "relative"};
  top: 0;
  left: 0;
  width: 100%;
`;