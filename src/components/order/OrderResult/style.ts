import styled from '@emotion/styled';
import { Box, Button, Typography } from '@mui/material';

export const Wrapper = styled(Box)`
  flex: 1;
  padding-top: 20px;
  min-height: 500px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 20px;
  height: 100%;
`;

export const Title = styled(Typography)`
  font-size: 20px;
  letter-spacing: -1px;
  margin-bottom: 20px;
`;

export const BtnGroup = styled.div`
  display: flex;
  align-items: center;
  margin-top: auto;
  gap: 10px;
`;

export const Success = styled(Button)`
  margin-top: auto;
  width: 100px;
`;