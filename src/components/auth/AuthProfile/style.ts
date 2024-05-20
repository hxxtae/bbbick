import Box from '@muiDom/Box';
import Button from '@muiDom/Button';
import Typography from '@muiDom/Typography';
import { styled as style } from '@mui/system';
import styled from '@emotion/styled';

export const ProfileBlock = styled(Box)`

`;

export const SubTitle = styled(Typography)`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 20px;
`;


export const Profile = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 20px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
`;

export const ProfileImg = styled(Box)`
  
`;

export const ProfileName = styled(Typography)`
  font-size: 14px;
  font-weight: 600;
  max-width: 200px;
  margin-right: auto;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ProfileSetting = style(Button)(() => ({
  flexShrink: 0,
  backgroundColor: "#FFFFFF",
  ":hover": {
    backgroundColor: "#E6EBFF",
  },
}))

export const ProfileEdit = styled.div`

`;

export const EditBox = styled.div`

`;
