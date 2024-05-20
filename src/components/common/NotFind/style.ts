import styled from '@emotion/styled';
import Paper from '@muiDom/Paper';
import Typography from '@muiDom/Typography';

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
