import styled from '@emotion/styled';
import {
  Typography,
  TableCell,
  TableRow,
  Button
} from '@mui/material';

export const Form = styled.form`

`;

export const Submit = styled(Button)`
  height: 30px;
  margin-top: 5px;
`;

export const ImageBox = styled.div`
  
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  -webkit-user-drag: none;
`;

export const Text = styled(Typography)`
  font-size: 14px;
  padding: 5px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  a &:hover {
    text-decoration: underline;
    opacity: .7;
  }
`;

export const Remove = styled(Button)`
  height: 30px;
`;

export const Sub1 = styled(Typography)`
  display: inline;
  font-size: 11px;
  margin-left: 2px;
  vertical-align: middle;
`;

export const TableRow_ = styled(TableRow)``;

export const TableCell_ = styled(TableCell)``;

