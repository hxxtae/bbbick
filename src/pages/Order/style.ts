import { styled as style } from '@mui/system';
import styled from '@emotion/styled';
import { Box, Container, Typography } from '@mui/material';

export const Section = styled(Container)`
  padding-top: 20px;
`;

export const Block = styled(Box)`
  display: flex;
  justify-content: flex-start;
  padding: 20px 24px;
  border-radius: 7px;
  margin-bottom: 20px;
  max-width: 820px;
  box-shadow: 4px 4px 12px -4px rgba(0, 0, 0, .2);
`;

export const StepBlock = styled(Box)`
  max-width: 180px;
  width: 180px;
  margin-right: 20px;
`
export const StepName = style(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: 600,
  marginBottom: "20px"
}));

export const StepDesc = styled(Typography)`
  font-weight: 600;
  word-wrap: break-word;
  word-break: keep-all;
`;