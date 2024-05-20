import Box from '@muiDom/Box';
import Button from '@muiDom/Button';
import Typography from '@muiDom/Typography';
import { styled as style } from '@mui/system';
import styled from '@emotion/styled';

export const EditBox = styled.div`
  margin-bottom: 20px;
`;

export const EditRow = style(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  padding: "10px",
  paddingLeft: "0",
  cursor: "pointer",
  borderRadius: "5px",

  ":hover": {
    backgroundColor: theme.palette.bg.modal,
  }
}));

export const EditText = style(Typography)(() => ({
  fontSize: "14px",
  marginRight: "auto"
}));

export const InputForm = styled.form`
  display: flex;
  justify-content: stretch;
  align-items: center;
  gap: 10px;
  width: 100%;

  & input {
    padding-top: 9px;
    padding-bottom: 9px;
  }
`;

export const BtnGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const SaveBtn = styled(Button)`
  
`;

export const CancelBtn = style(Button)(() => ({
  backgroundColor: "#FFFFFF",
  ":hover": {
    backgroundColor: "#E6EBFF",
  },
}));

export const Label = styled.label`
  position: relative;
  cursor: pointer;
`;

export const IconBox = style(Box)(({ theme }) => ({
  position: "absolute",
  top: "-5px",
  right: "-5px",
  zIndex: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "4px",
  boxSizing: "content-box",
  borderRadius: "100px",
  backgroundColor: theme.palette.bg.main,
}))