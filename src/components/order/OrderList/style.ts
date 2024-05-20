import styled from '@emotion/styled';
import Box  from '@muiDom/Box';
import Button from '@muiDom/Button';
import ListItem from '@muiDom/ListItem';
import ListItemText from '@muiDom/ListItemText';
import Typography from '@muiDom/Typography';
import { styled as style } from '@mui/system';

export const Wrapper = styled(Box)`
  flex: 1;
  height: 500px;
  min-height: 500px;
  padding-top: 20px;
`;

export const Title = styled(Typography)`
  font-size: 20px;
  letter-spacing: -1px;
  margin-bottom: 20px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 20px;
  height: 100%;
`;

export const Item = styled(ListItem)`
  align-items: flex-start;
`;

export const ItemText = styled(ListItemText)`
  
`;

export const TotalPrice = styled(Typography)`
  font-size: 20px;
  font-weight: 600;
`;

export const BtnGroup = styled.div`
  display: flex;
  align-items: center;
  margin-top: auto;
  gap: 10px;
`;

export const PrevBtn = style(Button)(() => ({
  width: "100px",
  backgroundColor: "#FFFFFF",
  ":hover": {
    backgroundColor: "#E6EBFF",
  },
}));

export const Submit = styled(Button)`
  width: 100px;
`;