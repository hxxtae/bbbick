import { styled as style } from '@mui/system';
import { Box, Button, Typography } from '@mui/material';
import styled from '@emotion/styled';

export const Wrapper = styled(Box)`
  flex: 1;
  padding-top: 20px;
  min-height: 500px;
`;

export const Title = styled(Typography)`
  font-size: 20px;
  letter-spacing: -1px;
  margin-bottom: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: flex-end;
  gap: 20px;
  height: 100%;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 120px;
  gap: 10px;
`;

export const BtnGroup = styled.div`
  margin-top: auto;
  display: flex;
  gap: 10px;
`;

export const PrevBtn = style(Button)(() => ({
  width: "100px",
  backgroundColor: "#FFFFFF",
  ":hover": {
    backgroundColor: "#E6EBFF",
  },
}));

export const Next = styled(Button)`
  width: 100px;
`;