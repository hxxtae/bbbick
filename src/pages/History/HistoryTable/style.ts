import styled from '@emotion/styled';
import { styled as style } from '@mui/system';
import Box from '@muiDom/Box';
import Button from '@muiDom/Button';
import TableCell from '@muiDom/TableCell';
import Typography from '@muiDom/Typography';

export const TableCell_ = styled(TableCell)`
  font-weight: 600;
`;

export const ImageBox = styled.div`
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin: 0 auto;
  -webkit-user-drag: none;
`;

export const Title = styled(Typography)`
  display: inline-block;
  margin: 4px 0;
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:hover {
    text-decoration: underline;
    opacity: .7;
  }
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Price = styled(Typography)`
  font-size: 14px;
`;

export const Count = styled(Typography)`
  font-size: 14px;
`;

export const Done = style(Box)(({ theme }) => ({
  display: "inline-block",
  backgroundColor: theme.palette.success.main,
  padding: "2px 4px",
  borderRadius: "3px",
  fontSize: "12px",
  fontWeight: 600,
  color: "#FFFFFF",
}));

export const Cancel = style(Box)(({ theme }) => ({
  display: "inline-block",
  backgroundColor: theme.palette.error.main,
  padding: "2px 4px",
  borderRadius: "3px",
  fontSize: "12px",
  fontWeight: 600,
  color: "#FFFFFF",
}));

export const Info = style(Typography)(({ theme }) => ({
  fontSize: "12px",
  color: theme.palette.primary.light,
  // textDecorationLine: 'underline',
}));

export const Day = style(Typography)(() => ({
  fontSize: "14px",
  fontWeight: 600,
}));

export const CancelBtn = style(Button)(({ theme }) => ({
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