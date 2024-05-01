import styled from '@emotion/styled';
import { styled as style } from '@mui/system';
import { Box, Button, Chip, Container, Typography } from '@mui/material';

export const Section = styled(Container)`
  padding-top: 20px;
`;

export const Block = styled(Box)`
  padding: 20px 24px;
  border-radius: 7px;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 40px;
`;

// Left
export const Left = styled.div`
  
`;

export const ImageBox = styled.div`
  width: 280px;
  max-width: 280px;
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const DescBox = styled.div`

`;

// Right
export const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: auto;
`;

export const Title = styled(Typography)`
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -1px;
  margin-bottom: 20px;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Text = styled(Box)`
  font-size: 14px;
`;


export const ChipBox = styled(Box)`
  display: flex;
  justify-content: stretch;
  gap: 5px;
  user-select: none;
  padding: 20px 0;
  border-width: 0;
  border-bottom-width: 1px;
  border-style: solid;
`;

export const Chipe = styled(Chip)`

`;

export const PriceWrapper = styled(Box)`
  display: grid;
  grid-template-columns: 60px 1fr;
  grid-template-rows: repeat(2, 1fr);
  align-items: center;
  padding: 15px 0;
`;

export const Price = styled(Box)`
  font-size: 25px;
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
  justify-content: flex-end;
  gap: 10px;
`;

export const AddCart = style(Button)(({ theme }) => ({
  backgroundColor: theme.palette.success.main,
  ":hover": {
    backgroundColor: theme.palette.success.sub
  },
}));

export const BuyNow = styled(Button)`
  
`;

export const Desc = styled(Typography)`
  word-wrap: break-word;
  word-break: keep-all;
  font-size: 14px;
  line-height: 2;
`;

