import { styled as style } from '@mui/system';
import styled from '@emotion/styled';
import { Box, Button, Paper, Typography } from '@mui/material';

export const Block = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 20px 24px;
  border-radius: 7px;
  margin-bottom: 20px;
`;

export const Title = styled(Typography)`
  font-size: 18px;
  letter-spacing: -1px;
  margin-bottom: 20px;
`;

export const InfoWrapper = styled(Box)`
  display: grid;
  grid-template-columns: 2fr 1fr;
  border-radius: 4px;
  gap: 20px;
  /* margin-bottom: 20px; */
`;

export const InfoContent = styled(Paper)`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 4px;
`;

export const InfoBoxTop = styled(Box)`
  display: flex;
  flex-direction: column;
`;

export const InfoBoxBottom = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const InfoTitle = styled(Typography)`
  margin: 0;
  margin-bottom: 20px;
  font-weight: 600;
`;

export const InfoText = styled(Typography)`
  font-size: 14px;
`;

export const Total = styled(Typography)`
  font-size: 20px;
  font-weight: 600;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

export const NextButton = styled(Button)`
  
`;

export const PrevButton = style(Button)(() => ({
  backgroundColor: "#ffffff",
  ":hover": {
    backgroundColor: "#E6EBFF",
  },
}));