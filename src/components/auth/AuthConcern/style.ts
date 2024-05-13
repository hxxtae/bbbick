import styled from '@emotion/styled';
import { styled as style } from '@mui/system';
import { Box, Typography } from '@mui/material';

export const SubTitle = styled(Typography)`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 20px;
`;

export const PrivateBlock = styled.div`
  
`;

export const PrivateBox = style(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  paddingTop: "20px",
  paddingBottom: "20px",
  borderRadius: "7px",
  backgroundColor: theme.palette.bg.card,
  marginBottom: "20px",
}));

export const PrivateItem = style(Box)(({ theme }) => ({
  textAlign: "center",
  flex: 1,
  borderRight: `1px solid ${theme.palette.border.main}`,  
  ":last-child": {
    borderRight: "none",
  }
}))

export const PrivateNum = styled(Typography)`
  line-height: 6em;
  font-weight: 600;
`;

export const PrivateText = styled(Typography)`
  font-size: 14px;
  color: #999999;
  margin-bottom: 20px;
`;

export const PointBox = style(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: "20px",
  padding: "20px",
  borderRadius: "7px",
  backgroundColor: theme.palette.bg.card,
}));

export const PointIcon = style(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  width: "24px",
  height: "24px",
  borderRadius: "6px",
  padding: "5px",
  boxSizing: "content-box",
  userSelect: "none",
}))

export const Icon = styled.img`
  display: inline-block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const PointText = styled(Typography)`
  
`;



