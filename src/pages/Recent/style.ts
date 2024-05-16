import styled from '@emotion/styled';
import { styled as style } from '@mui/system';
import { Box, Chip, Container, Typography } from '@mui/material';

export const Section = styled(Container)`
  padding-top: 20px;
`;

export const Block = styled(Box)`
  padding: 20px 24px;
  border-radius: 7px;
  margin-bottom: 20px;

  select: {
    font-size: 14px;
    padding-top: 5px;
    padding-bottom: 5px;
  }
`;

export const Title = styled(Typography)`
  font-size: 25px;
  margin-bottom: 15px;
`;

export const CategoryBlock = styled(Box)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
`;

export const ChipItem = style(Chip)<{ choose: string }>(({ theme, choose }) => ({
  marginTop: "20px",
  cursor: "pointer",
  backgroundColor: choose === "true" ? theme.palette.text.main : "transparent",
  color: choose === "true" ? theme.palette.bg.main : theme.palette.text.main,

  ":hover": {
    color: theme.palette.text.main
  }
}))