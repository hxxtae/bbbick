import styled from '@emotion/styled';
import { styled as style } from '@mui/system';
import Box from '@muiDom/Box';
import Button from '@muiDom/Button';
import Chip from '@muiDom/Chip';
import Typography from '@muiDom/Typography';

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

export const Item = style(Box)(({ theme }) => ({
  display: "flex",
  flexShrink: 0,
  height: "200px",
  maxHeight: "200px",
  overflow: "hidden",
  gap: "10px",

  ":hover": {
    backgroundColor: theme.palette.bg.card,
  },
}))

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

export const DelButton = style(Button)(({ theme }) => ({
  backgroundColor: "transparent",
  borderColor: theme.palette.error.bg,
  color: theme.palette.error.main,
  fontSize: "14px",
  ":hover": {
    backgroundColor: "transparent",
    borderColor: theme.palette.error.bg,
    color: theme.palette.error.main,
    opacity: .7,
  },
}));