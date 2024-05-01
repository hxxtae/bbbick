import styled from '@emotion/styled';
import { Box, Button, Chip, Typography } from '@mui/material';

export const Section = styled(Box)`
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
  height: 100%;
  padding: 0;
  margin: 0;
`;

export const Item = styled(Box)`
  display: flex;
  flex-shrink: 0;
  height: 200px;
  max-height: 200px;
  overflow: hidden;
  gap: 10px;
`;

export const ImageBox = styled.div`
  overflow: hidden;
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 0 20px;
  font-size: 14px;
`;

export const Title = styled.h2`
  font-size: 16px;
  font-weight: 600;
  margin: 0;
  margin-bottom: 10px;
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

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`;

export const UpdButton = styled(Button)`
  font-size: 14px;
`

export const DelButton = styled(Button)`
  font-size: 14px;
`;
