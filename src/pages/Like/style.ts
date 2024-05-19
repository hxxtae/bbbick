import styled from '@emotion/styled';
import { Box, Container, Typography } from '@mui/material';

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
  font-size: 20px;
  margin-bottom: 15px;
`;