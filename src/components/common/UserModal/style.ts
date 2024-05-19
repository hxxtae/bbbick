import styled from '@emotion/styled';
import { styled as style } from '@mui/system';
import { Box, Button, Paper, Typography } from '@mui/material';

export const Section = styled(Paper)`
  position: relative;
  padding: 20px 20px 10px;
  border-radius: 20px;
`;

export const Loading = styled.div`
  position: absolute;
  top: 0;
`;

export const HeadBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
`;

export const FootBlock = styled.div`
  margin-bottom: 10px;
`;

// Head
export const UserEmail = styled(Typography)`
  font-size: 14px;
`;

export const UserProfile = styled.div`

`;

export const UserName = styled(Typography)`
  font-size: 15px;
`;

export const MoreBtn = styled(Button)(() => ({
  backgroundColor: "#FFFFFF",
  ":hover": {
    backgroundColor: "#E6EBFF",
  },
}))

// Foot
export const UserInfoWrapper = style(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  padding: "20px 0",
  backgroundColor: theme.palette.bg.modalSub,
  borderRadius: "8px",
}));

export const UserSignOut = style(Button)(({ theme }) => ({
  width: "100%",
  color: theme.palette.text.main
}));

export const AnyText = styled.span`
  display: inline-block;
  width: 100%;
  text-align: center;
  font-size: 12px;
  color: #999999;
  user-select: none;
`;



