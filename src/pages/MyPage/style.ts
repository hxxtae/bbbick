import styled from '@emotion/styled';
import { Box, Container, Typography } from '@mui/material';

export const Section = styled(Container)`
  padding-top: 20px;
`;

export const Block = styled(Box)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  padding: 20px 24px;
  border-radius: 7px;
  margin-bottom: 20px;
`;

export const Title = styled(Typography)`
  font-size: 18px;
  font-weight: 600;
  letter-spacing: -1px;
  margin-bottom: 20px;
`;
