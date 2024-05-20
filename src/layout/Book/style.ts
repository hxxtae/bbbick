import styled from '@emotion/styled';
import { Box, Chip, Typography } from '@mui/material';

export const Item = styled(Box)`
  display: flex;
  flex-shrink: 0;
  height: 220px;
  max-height: 220px;
  gap: 10px;
`;

export const ImageBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ImageWrapper = styled.div`
  overflow: hidden;
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ImageBottom = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  margin: auto 0;
  border-radius: 4px;
`;

export const Like = styled(Typography)`
  
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  font-size: 14px;
`;

export const Title = styled.h2`
  font-size: 16px;
  font-weight: 600;
  margin: 0;
  margin-bottom: 10px;

  &:hover {
    text-decoration: underline;
  }
`;

export const Text = styled(Box)`
  /* font-size: 14px; */
`;

export const ChipBox = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 5px;
  user-select: none;
`;

export const Chipe = styled(Chip)`
  margin: 10px 0;
`;

export const Sub1 = styled(Typography)`
  display: inline;
  font-size: 11px;
  margin-left: 2px;
  vertical-align: middle;
`;

export const Sub2 = styled(Typography)`
  display: inline;
  font-size: 11px;
  margin-left: 10px;
  vertical-align: middle;
`;

