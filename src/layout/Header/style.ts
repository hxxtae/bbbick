import { Avatar, Typography,  } from '@mui/material';
import styled from '@emotion/styled';
import { LAYOUT_OF_HEIGHT, LAYOUT_OF_WIDTH } from '@/constants/style';

export const Section = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: calc(${LAYOUT_OF_WIDTH.pc}px - 2*${LAYOUT_OF_WIDTH.gutter}px);
  width: 100%;
  height: ${LAYOUT_OF_HEIGHT.header}px;
`;

export const Left = styled.div`
  
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Logo = styled(Typography)`
  font-size: 16px;
  font-weight: bold;
`;

export const UserImage = styled(Avatar)`
  width: 30px;
  height: 30px;
`;

export const UserID = styled(Typography)`
  font-size: 14px;
`;
