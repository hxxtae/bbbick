import styled from '@emotion/styled';
import { Paper, Typography } from '@mui/material';

export const Block = styled(Paper)<{height: string}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${({ height }) => height};
`;

export const Text = styled(Typography)`
  font-size: 14px;
`;
